# Use the official Node.js image
FROM node:18 AS dev-stage

# Set the working directory
WORKDIR /app

# Copy package.json and install dependencies
COPY package*.json ./
RUN npm install

# Copy the project files
COPY . .

# Expose the default Vite port
EXPOSE 5173

# Start the development server
CMD ["npm", "run", "dev", "--", "--host"]
