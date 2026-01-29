# Use official Node image
FROM node:20-alpine

# Set working directory
WORKDIR /app

# Install Angular CLI globally
RUN npm install -g @angular/cli

# Copy dependency files first (better caching)
COPY package.json package-lock.json ./

# Install project dependencies
RUN npm ci

# Copy entire project
COPY . .

# Expose Angular dev server port
EXPOSE 4200

# Run Angular dev server
CMD ["ng", "serve", "--host", "0.0.0.0"]
