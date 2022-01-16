#The first phase (Building phase)
FROM node:alpine as builder
WORKDIR /app
COPY package*.json ./
RUN yarn install
COPY . .
RUN yarn run build
#The second phase (Running phase)
FROM nginx
EXPOSE 80 
# For Elastic beanstalk
COPY --from=builder /app/build /usr/share/nginx/html

