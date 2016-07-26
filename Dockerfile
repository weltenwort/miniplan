FROM node:6.3

ADD client /opt/miniplan/client
WORKDIR /opt/miniplan/client
RUN npm install \
    && npm run build \
    && npm cache clean

WORKDIR /opt/miniplan/server
ADD server /opt/miniplan/server
RUN npm install \
    && npm cache clean

EXPOSE 80

ENV NODE_ENV production

CMD ["npm", "start"]
