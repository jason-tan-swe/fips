# Use official Node.js image
FROM node:22-alpine
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
# Set working directory
WORKDIR /app

# Copy package.json and pnpm-lock.yaml
COPY package*.json ./

RUN npm i -g turbo@^2

# Install dependencies
RUN npm install -g pnpm && pnpm install --no-frozen-lockfile


# Copy the rest of the application
COPY . .

# Build the app
RUN pnpm build

# Expose the backend port
ENV PORT=8000
EXPOSE 8000

# Run the server
CMD ["node", "dist/main"]
