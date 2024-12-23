# Use a Node.js image to install dependencies and build the project
FROM node:18-alpine AS build

# Set the working directory for the project
WORKDIR /app

# Clone the repository (assuming you want to clone a specific repository)
RUN apk add --no-cache git && \
    git clone https://github.com/adityapandit1798/my-portfolio-website.git .  # Replace with the actual repository URL

# Install dependencies
RUN npm install

# Build the project using Vite (assuming it's a Vite-based React project)
RUN npm run build

# Use a distroless Nginx image for serving the built project
FROM nginx:alpine

# Copy the build output from the build stage to Nginx's HTML folder
COPY --from=build /app/dist /usr/share/nginx/html

# Expose port 80 for the Nginx server
EXPOSE 80

# Start Nginx and keep it running
CMD ["nginx", "-g", "daemon off;"]
