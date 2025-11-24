# -----------------------------
# 1. Build Stage
# -----------------------------
FROM node:18-alpine AS builder

WORKDIR /app

# Install dependencies
COPY app/package*.json ./

RUN npm install --production

# Copy app source
COPY ../app .

# -----------------------------
# 2. Run Stage (Slim image)
# -----------------------------
FROM node:18-alpine

WORKDIR /app

# Copy only necessary files from builder
COPY --from=builder /app /app

# Create non-root user
RUN addgroup -S nodegroup && adduser -S nodeuser -G nodegroup

USER nodeuser

ENV PORT=3000

EXPOSE 3000

CMD ["node", "index.js"]

