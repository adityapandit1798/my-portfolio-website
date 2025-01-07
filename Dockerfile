# Stage 1: Build the React app
FROM node:18 AS build

# Set the working directory in the container
WORKDIR /app

# Clone the repository (assuming it's in a GitHub repo)
RUN git clone https://github.com/adityapandit1798/my-portfolio-website.git .

# Install dependencies
RUN npm install

# Build the app
RUN npm run build

# Stage 2: Serve the React app with Nginx
FROM nginx:latest

# Copy the build output from the previous stage to the Nginx public folder
COPY --from=build /app/dist /usr/share/nginx/html

# Expose port 80 to access the app
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]

# Stage 3: Run the proxy server (optional stage)
FROM node:18 AS proxy

WORKDIR /proxy

# Assuming you have a 'server' folder with the proxy server code
COPY server /proxy

# Install dependencies
RUN npm install

# Expose the proxy server port (use the port you need)
EXPOSE 4000

CMD ["node", "proxy-server.mjs"]