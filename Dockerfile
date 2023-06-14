FROM node:14.17.6-alpine

RUN apk add --no-cache python3 pnpm

WORKDIR /app

COPY package.json pnpm-lock.yaml ./

RUN pnpm install -g pnpm && pnpm install

COPY . .

# RUN pnpm run start