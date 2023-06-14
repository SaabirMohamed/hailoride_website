FROM node:18.4.0-alpine

# RUN apk add --no-cache python2 pnpm

WORKDIR /app

COPY package.json pnpm-lock.yaml ./

RUN pnpm install -g pnpm && pnpm install

COPY . .

# RUN pnpm run start
