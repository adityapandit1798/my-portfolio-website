# Stage 1: Build the React app
FROM node:18 AS build

# Set the working directory in the container
WORKDIR /app

# Clone the repository (assuming it's in a GitHub repo)
RUN git clone <repository_url> .

# Install dependencies
RUN npm install

# Build the app
RUN npm run build

# Stage 2: Serve the app with Nginx
FROM nginx:latest

# Copy the build output from the previous stage to Nginx's public folder
COPY --from=build /app/dist /usr/share/nginx/html

# Copy the custom Nginx configuration file (optional)
# COPY nginx.conf /etc/nginx/nginx.conf

# Expose port 80 for the app to be accessible
EXPOSE 80

# Run Nginx server
CMD ["nginx", "-g", "daemon off;"]
