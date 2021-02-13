#stage1 build
FROM node as node
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm i npm@latest -g
RUN npm install
COPY . .
RUN npm run build

#stage2 NGINX
FROM nginx
COPY --from=node /usr/src/app/dist/Covid19 /usr/share/nginx/html
COPY ./nginx.conf /etc/nginx/conf.d/default.conf