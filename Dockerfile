FROM node:12.22

# Create app directory
WORKDIR /app

# install gettext for envsubst
RUN apt-get update
RUN apt-get install -y gettext-base

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

#RUN npm install
RUN npm install
RUN npm install -g db-migrate-mysql
RUN npm install -g db-migrate
RUN npm install -g nodemon
ADD . /app
WORKDIR /app

EXPOSE 3000
# CMD [ "yarn", "start" ]
