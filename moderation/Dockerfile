# Specify a base image
FROM node:12.18.4-alpine

# set working director to '/app' in the container
WORKDIR /app

# copy over package.json
COPY ./package.json ./

# Install all dependencies
RUN npm install

# Copy over all of our remaining source code
COPY ./ ./

# Set the command to run when the container starts up
CMD ["npm", "start"]

