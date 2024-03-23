FROM node:18-alpine3.18 AS build
USER root
RUN npm -g install serve
RUN rm -rf /home/node/app
RUN mkdir /home/node/app
WORKDIR /home/node/app
COPY . /home/node/app

RUN cd /home/node/app
RUN npm install -g npm@10.5.0
RUN npm install -d
RUN npm run build
RUN chown -R root:root /home/node/app/build
RUN ls -la /home/node/app/build

FROM nginx:alpine AS run
USER root

RUN rm -rf /usr/share/nginx/html

COPY --from=build /home/node/app/build /usr/share/nginx/html
COPY --from=build /home/node/app/.nginx/nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
ENTRYPOINT ["nginx", "-g", "daemon off;"]