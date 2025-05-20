# Use official Node.js image
FROM node:20-alpine

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install --legacy-peer-deps

# Copy the rest of the server code
COPY . .

# Expose your server port (change if your server uses a different port)
EXPOSE 5000

# Start the server
CMD ["npm", "start"]