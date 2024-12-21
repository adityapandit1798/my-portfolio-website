# React Vite App Dockerization

This README provides a step-by-step guide to building and dockerizing a React Vite application and running it on port 80.

---

## Table of Contents

1. [Prerequisites](#prerequisites)
2. [Building the React Vite App](#building-the-react-vite-app)
3. [Dockerizing the App](#dockerizing-the-app)
4. [Running the Dockerized App](#running-the-dockerized-app)
5. [Accessing the Application](#accessing-the-application)

---

## Prerequisites

- Node.js installed on your system
- Docker installed and running
- Basic understanding of React and Docker

---

## Building the React Vite App

1. **Create a New Vite App**:

   ```bash
   npm create vite@latest my-portfolio-website --template react
   cd my-portfolio-website
   ```

2. **Install Dependencies**:

   ```bash
   npm install
   ```

3. **Build the App**:

   Run the following command to build the React Vite app:

   ```bash
   npm run build
   ```

   This will generate a `dist/` folder containing the production-ready static files.

4. **Test the App Locally** (Optional):

   Use Vite’s preview command to test the app locally:

   ```bash
   npm run preview
   ```

   Access the app at `http://localhost:<port>`.

---

## Dockerizing the App

1. **Create a `Dockerfile`**:

   In the project’s root directory, create a file named `Dockerfile` with the following content:

   ```dockerfile
   FROM nginx:alpine

   COPY ./dist /usr/share/nginx/html

   EXPOSE 80

   CMD ["nginx", "-g", "daemon off;"]
   ```

   - `nginx:alpine`: A lightweight version of the Nginx web server.
   - `COPY ./dist /usr/share/nginx/html`: Copies the built app into Nginx's default static file directory.
   - `EXPOSE 80`: Specifies the port on which the container listens.
   - `CMD`: Starts the Nginx server.

2. **Build the Docker Image**:

   ```bash
   sudo docker build -t my-portfolio-website .
   ```

3. **Verify the Image**:

   Run the following command to list Docker images:

   ```bash
   sudo docker images
   ```

   Ensure `my-portfolio-website` is listed.

---

## Running the Dockerized App

1. **Run the Container**:

   To map the container’s port 80 to the host’s port 80:

   ```bash
   sudo docker run -d -p 80:80 --name portfolio-container my-portfolio-website
   ```

   - `-d`: Runs the container in detached mode.
   - `-p 80:80`: Maps port 80 on the container to port 80 on the host.

2. **Verify the Container**:

   Check if the container is running:

   ```bash
   sudo docker ps
   ```

---

## Accessing the Application

Once the container is running, you can access the app:

- Locally: [http://localhost](http://localhost)
- On a remote server: Replace `localhost` with the server’s IP address.

---

## Troubleshooting

1. **Port 80 Already in Use**:
   - Stop any services using port 80 (e.g., Apache):
     ```bash
     sudo systemctl stop apache2
     ```

2. **Permission Denied**:
   - Use `sudo` when running Docker commands.

3. **Check Logs**:
   - View container logs for debugging:
     ```bash
     sudo docker logs portfolio-container
     ```

---

## Additional Notes

- You can customize the Nginx configuration by mounting a custom `nginx.conf` file.
- For deploying on a cloud server, ensure necessary ports are open in the firewall.
