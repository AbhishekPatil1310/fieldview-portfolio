import compression from "compression";
import cors from "cors";
import express from "express";
import helmet from "helmet";
import rateLimit from "express-rate-limit";
import pinoHttp from "pino-http";
import { randomUUID } from "node:crypto";
import { config } from "./config.js";
import { logger } from "./logger.js";
import { contactSchema } from "./validation.js";
import { sendContactEmail } from "./brevo.js";

const app = express();

if (config.TRUST_PROXY) {
  app.set("trust proxy", 1);
}

app.disable("x-powered-by");

app.use(
  pinoHttp({
    logger,
    genReqId: (req, res) => {
      const incomingId = req.headers["x-request-id"];
      const id = typeof incomingId === "string" && incomingId ? incomingId : randomUUID();
      res.setHeader("x-request-id", id);
      return id;
    },
    customLogLevel: (_req, res, error) => {
      if (error || res.statusCode >= 500) return "error";
      if (res.statusCode >= 400) return "warn";
      return "info";
    },
    autoLogging: {
      ignore: (req) => req.url === "/api/health",
    },
  }),
);

app.use(
  helmet({
    contentSecurityPolicy: false,
  }),
);
app.use(compression());
app.use(express.json({ limit: "16kb" }));

app.use(
  cors({
    origin(origin, callback) {
      if (!origin) {
        callback(null, true);
        return;
      }

      if (config.corsOrigins.includes(origin)) {
        callback(null, true);
        return;
      }

      callback(new Error("Origin not allowed by CORS"));
    },
    methods: ["POST", "GET", "OPTIONS"],
  }),
);

const globalRateLimit = rateLimit({
  windowMs: config.RATE_LIMIT_WINDOW_MS,
  max: config.RATE_LIMIT_MAX,
  standardHeaders: true,
  legacyHeaders: false,
});

const contactRateLimit = rateLimit({
  windowMs: config.RATE_LIMIT_WINDOW_MS,
  max: config.RATE_LIMIT_MAX,
  standardHeaders: true,
  legacyHeaders: false,
  message: { message: "Too many requests, please try again later." },
});

app.use(globalRateLimit);

app.get("/api/health", (_req, res) => {
  res.status(200).json({ status: "ok" });
});

app.post("/api/contact", contactRateLimit, async (req, res) => {
  const parsed = contactSchema.safeParse(req.body);

  if (!parsed.success) {
    res.status(400).json({ message: "Invalid input data." });
    return;
  }

  const { website, ...contactData } = parsed.data;

  if (website) {
    res.status(202).json({ message: "Message accepted." });
    return;
  }

  try {
    await sendContactEmail(contactData);
    res.status(202).json({ message: "Message sent successfully." });
  } catch (error) {
    req.log.error({ err: error }, "Failed to send contact email");
    res.status(502).json({ message: "Unable to send message right now." });
  }
});

app.use((err, req, res, _next) => {
  req.log.error({ err }, "Unhandled application error");

  if (err?.message === "Origin not allowed by CORS") {
    res.status(403).json({ message: "Forbidden origin." });
    return;
  }

  res.status(500).json({ message: "Internal server error." });
});

const server = app.listen(config.PORT, () => {
  logger.info({ port: config.PORT, env: config.NODE_ENV }, "Mail service listening");
});

const shutdown = (signal) => {
  logger.info({ signal }, "Graceful shutdown started");
  server.close((error) => {
    if (error) {
      logger.error({ err: error }, "Shutdown failed");
      process.exit(1);
    }

    logger.info("Shutdown complete");
    process.exit(0);
  });
};

process.on("SIGTERM", () => shutdown("SIGTERM"));
process.on("SIGINT", () => shutdown("SIGINT"));
