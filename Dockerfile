# ----------- Stage 1: Build frontend -----------
FROM node:20 AS frontend-build

WORKDIR /app/frontend

COPY frontend/package*.json ./
RUN npm install

COPY frontend/ .
RUN npm run build

# ----------- Stage 2: Build backend -----------
FROM node:20 AS backend-build

WORKDIR /app/backend

COPY backend/package*.json ./
RUN npm install --production

COPY backend/ .
COPY --from=frontend-build /app/frontend/build ./public

EXPOSE 8000

CMD ["node", "server.js"]
