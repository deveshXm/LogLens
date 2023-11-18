# Use the official Node.js image as the base image
FROM node:18

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code to the container
COPY . .

# Build the Vite project
RUN npm run build

# Expose the port your application runs on (default is 3000 for Vite)
EXPOSE 4173

# Start the application
CMD ["npm", "run", "preview"]
