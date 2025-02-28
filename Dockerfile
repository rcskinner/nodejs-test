# Stage 1: Build
FROM node:22-alpine AS builder

# Set working directory
WORKDIR /app

# Install dependencies only
COPY package.json package-lock.json ./
RUN npm install --only=production && npm install --save-dev esbuild

# Copy source code & build
COPY . .
RUN node build.mjs

# Stage 2: Run (Minimal Image)
FROM node:22-alpine

# Set working directory
WORKDIR /app

# Copy built files & only necessary dependencies
COPY --from=builder /app/dist /app/dist
COPY --from=builder /app/node_modules /app/node_modules
COPY package.json ./

# Expose port
EXPOSE 3000

# Run the bundled app
CMD ["node", "dist/bundle.js"]
