# বেস ইমেজ
FROM node:18-alpine AS builder
WORKDIR /app

# ডিপেন্ডেন্সি ইনস্টল
COPY package.json package-lock.json* ./
RUN npm install

# সোর্স কোড কপি এবং বিল্ড
COPY . .
RUN npm run build

# ফাইনাল প্রোডাকশন ইমেজ
FROM node:18-alpine AS runner
WORKDIR /app

ENV NODE_ENV production

# স্ট্যান্ডঅ্যালোন বিল্ড কপি করা
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static

EXPOSE 3000
ENV PORT 3000

CMD ["node", "server.js"]