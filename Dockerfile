# Stage 1: Serve the React app with Nginx
FROM nginx:latest

# Set the working directory in the container (optional)
WORKDIR /usr/share/nginx/html

# Copy the `dist` folder from your local machine into the Nginx public folder
# Make sure the `dist` folder exists in your local project directory
COPY dist /usr/share/nginx/html

# Expose port 80 to access the app
EXPOSE 80

# Start Nginx server
CMD ["nginx", "-g", "daemon off;"]
