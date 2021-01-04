FROM node:12.7-alpine AS build
WORKDIR /app
COPY package.json ./
RUN num install
COPY . .
RUN npm run build --prod

FROM nginx:1.17.1-alpine As prod-stage
COPY --from=build /app/dist/ngxs-state-design /usr/share/nginx/html
EXPOSE 80
CMD["nginx","-g","daemon off;"]
