FROM node:14.17.6-alpine

RUN apk add --no-cache python3

WORKDIR /app

COPY package.json pnpm-lock.yaml ./

RUN npm install -g pnpm && pnpm install

COPY . .

# RUN pnpm run start