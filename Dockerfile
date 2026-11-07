# Multi-stage Docker build for Packnesia
# Stage 1: Build static assets and SSG Money Pages
FROM node:20-alpine AS builder

WORKDIR /app

# Ensure dev dependencies and build tools are always installed
ENV NODE_ENV=development

# Install dependencies
COPY package*.json ./
RUN npm install --include=dev

# Copy source files
COPY . .

# Run full build: compiles Vite bundle and runs SSG generators
RUN npm run build

# Stage 2: Production web server using lightweight Nginx
FROM nginx:alpine

# Copy custom Nginx configuration with caching & SPA try_files
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy compiled static files
COPY --from=builder /app/dist /usr/share/nginx/html

# Expose HTTP port
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
