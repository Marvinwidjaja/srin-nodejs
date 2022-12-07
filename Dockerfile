# Use a lighter version of Node as a parent image
FROM node:16

# Set the working directory to /api
WORKDIR /usr/src/api

# copy package.json into the container at /api
COPY package*.json ./

# install dependencies
# RUN npm config set unsafe-perm true

RUN npm install -g nodemon
RUN npm ci

# Copy the current directory contents into the container
COPY . .

# Make port 80 available to the world outside this container
EXPOSE 5000

# Run the app when the container launches
# ENTRYPOINT ["nodemon", "/usr/src/app/server.js"]  
CMD ["npm", "run", "dev"]