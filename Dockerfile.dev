#Specify a base image
FROM node:alpine
#Specify working directory
WORKDIR '/app'
#Specify dependencies
COPY package*.json ./
RUN yarn install
COPY . .
#Run default command
CMD ["yarn","run","start"]

