# ============================================
# Dockerfile - React App with Node.js Server
# ============================================

FROM node:18-alpine

RUN addgroup -g 1001 -S appgroup && \
    adduser -S appuser -u 1001

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

RUN chown -R appuser:appgroup /app

USER appuser

EXPOSE 3000

HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
    CMD wget --no-verbose --tries=1 --spider http://localhost:3000/health || exit 1

CMD ["node", "server.js"]