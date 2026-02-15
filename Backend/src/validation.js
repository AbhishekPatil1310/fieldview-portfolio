import { z } from "zod";

const stripControlChars = (value) => value.replace(/[\r\n\t]+/g, " ").trim();

export const contactSchema = z.object({
  name: z
    .string()
    .min(2, "Name must be at least 2 characters")
    .max(80, "Name must be at most 80 characters")
    .transform(stripControlChars),
  email: z.string().email("Please provide a valid email address").max(160),
  message: z
    .string()
    .min(10, "Message must be at least 10 characters")
    .max(5000, "Message must be at most 5000 characters")
    .transform((value) => value.trim()),
  website: z.string().max(120).optional().default(""),
});
