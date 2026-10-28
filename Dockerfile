# Stage 1: Dependencies
FROM node:18-alpine AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app
COPY package*.json ./
RUN npm ci

# Stage 2: Builder
FROM node:18-alpine AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
ENV NEXT_TELEMETRY_DISABLED 1
RUN npm run build

# Stage 3: Runner (Maximum Security)
FROM node:18-alpine AS runner
WORKDIR /app

ENV NODE_ENV production
ENV NEXT_TELEMETRY_DISABLED 1

# নন-রুট ইউজার ও গ্রুপ তৈরি
RUN addgroup --system --gid 1001 nodejs && \
    adduser --system --uid 1001 nextjs

# অপ্রয়োজনীয় ফাইল রিমুভ করে অ্যাটাক সারফেস কমানো
RUN rm -rf /var/cache/apk/*

COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

# বাধ্যতামূলকভাবে রুট ইউজার সুইচ করে নন-রুট করা
USER nextjs

EXPOSE 3000
ENV PORT 3000

CMD ["node", "server.js"]