import "dotenv/config";
import { z } from "zod";

const envSchema = z.object({
  NODE_ENV: z.enum(["development", "test", "production"]).default("development"),
  PORT: z.coerce.number().int().min(1).max(65535).default(4000),
  TRUST_PROXY: z
    .string()
    .optional()
    .transform((value) => value === "1" || value === "true"),
  CORS_ORIGINS: z.string().min(1, "CORS_ORIGINS is required"),
  BREVO_API_KEY: z.string().min(1, "BREVO_API_KEY is required"),
  BREVO_SENDER_EMAIL: z.string().email("BREVO_SENDER_EMAIL must be a valid email"),
  BREVO_SENDER_NAME: z.string().min(1, "BREVO_SENDER_NAME is required"),
  CONTACT_TO_EMAIL: z.string().email("CONTACT_TO_EMAIL must be a valid email"),
  RATE_LIMIT_WINDOW_MS: z.coerce.number().int().positive().default(15 * 60 * 1000),
  RATE_LIMIT_MAX: z.coerce.number().int().positive().default(10),
});

const parsed = envSchema.safeParse(process.env);

if (!parsed.success) {
  const formattedErrors = parsed.error.issues.map((issue) => `${issue.path.join(".")}: ${issue.message}`).join("; ");
  throw new Error(`Invalid environment configuration: ${formattedErrors}`);
}

const splitOrigins = (origins) =>
  origins
    .split(",")
    .map((origin) => origin.trim())
    .filter(Boolean);

export const config = {
  ...parsed.data,
  corsOrigins: splitOrigins(parsed.data.CORS_ORIGINS),
};
