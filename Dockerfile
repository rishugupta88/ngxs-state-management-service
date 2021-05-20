#stage 1

FROM node:10.23.0-alpine3.10 AS build
WORKDIR /app
COPY package.json ./
RUN npm install
COPY . .
RUN npm run build --prod

#stage 2
FROM nginx:1.19.6-alpine As prod-stage
COPY --from=build /app/dist/ngxs-state-design /usr/share/nginx/html
EXPOSE 80
CMD ['nginx', '-g', 'daemon off;']
