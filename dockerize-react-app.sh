#!/bin/bash

# Exit immediately if a command exits with a non-zero status
set -e

# Variables
APP_NAME="react-app"
DOCKER_IMAGE="react-app-image"
DOCKER_PORT=5173

# Step 1: Check if Docker is installed
if ! [ -x "$(command -v docker)" ]; then
  echo "Error: Docker is not installed." >&2
  exit 1
fi

# Step 2: Check if the React app exists
if [ ! -f "package.json" ]; then
  echo "Error: No React app detected in the current directory. Please navigate to your React app directory." >&2
  exit 1
fi

# Step 3: Create a Dockerfile
echo "Creating Dockerfile..."
cat <<EOL > Dockerfile
# Use Node.js for building the app
FROM node:18 AS build-stage

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build

# Use Nginx for serving the app
FROM nginx:1.25 AS production-stage

COPY --from=build-stage /app/build /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
EOL

# Step 4: Build the Docker image
echo "Building the Docker image..."
docker build -t $DOCKER_IMAGE .

# Step 5: Run the Docker container
echo "Running the Docker container..."
docker run -d -p $DOCKER_PORT:80 --name $APP_NAME $DOCKER_IMAGE

echo "React app is running at http://localhost:$DOCKER_PORT"
