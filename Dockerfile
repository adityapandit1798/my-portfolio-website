# Build React App
FROM node:18-alpine AS build
WORKDIR /app
RUN apk add --no-cache git && \
    git clone https://github.com/adityapandit1798/my-portfolio-website.git .  # Replace with the actual repository URL
RUN npm install
RUN npm run build

# Run Proxy Server (Node.js) with React App
FROM node:18-alpine AS server
WORKDIR /app

# Copy the proxy server and React app
COPY /server/proxy-server.js /app/
COPY /server/.env /app/
COPY --from=build /app/dist /app/client-build

# Install dependencies for the proxy server
RUN npm install express axios cors dotenv

# Expose proxy port and React port
EXPOSE 3000 8080 80

# Start the proxy server and React app
CMD ["sh", "-c", "node proxy-server.js"]
