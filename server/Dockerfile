# Stage 3: Run the proxy server
FROM node:18 AS proxy

# Set the working directory in the container for proxy
WORKDIR /proxy

# Copy the server folder from your project to the container
COPY server /proxy

# Install dependencies in the server folder
RUN npm install

# Expose the proxy server port (optional, use the port your proxy uses)
EXPOSE 4000

# Run the proxy server script
CMD ["node", "proxy-server.mjs"]
