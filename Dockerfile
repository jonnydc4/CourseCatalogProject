FROM node:18

# Create the node container's directory.
RUN mkdir /usr/src/app

# Set it to the working directory
WORKDIR /usr/src/app

# Copy package.json's and run install to download the dependancies on to the container.
COPY backend/package.json ./
COPY backend/package-lock.json ./
RUN npm install

# Expose a port and start the expressApp.js.
EXPOSE 3000
CMD ["npm", "run", "start"]