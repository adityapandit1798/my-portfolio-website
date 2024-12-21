# Use an official Nginx image as the base
FROM nginx:alpine

# Copy build output to the Nginx HTML folder
COPY ./dist /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
