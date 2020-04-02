#The first phase (Building phase)
FROM node:alpine as builder
WORKDIR /app
COPY package.json .
RUN npm install
COPY . .
RUN npm run build
#The second phase (Running phase)
FROM nginx
EXPOSE 80 
# For Elastic beanstalk
COPY --from=builder /app/build /usr/share/nginx/html

