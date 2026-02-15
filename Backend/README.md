# Portfolio Mail Service (Brevo)

Production-oriented Express API for contact form delivery via Brevo.

## Features

- Brevo transactional email via REST API
- Input validation using Zod
- Security middleware (`helmet`, CORS restrictions, disabled `x-powered-by`)
- Rate limiting on all routes plus contact endpoint
- Structured request logs with `pino` and request IDs
- Health check endpoint (`GET /api/health`)
- Graceful shutdown handling (`SIGTERM` / `SIGINT`)

## Setup

1. Install dependencies:
   - `npm install`
2. Configure environment:
   - Copy `.env.example` to `.env`
   - Fill Brevo and sender settings
3. Start local server:
   - `npm run dev`

## API

### `POST /api/contact`

Body:

```json
{
  "name": "Your Name",
  "email": "you@example.com",
  "message": "Your message...",
  "website": ""
}
```

Response:

- `202`: accepted and sent (or honeypot accepted)
- `400`: validation error
- `429`: rate limited
- `502`: upstream email service failure

### `GET /api/health`

Response:

```json
{
  "status": "ok"
}
```
