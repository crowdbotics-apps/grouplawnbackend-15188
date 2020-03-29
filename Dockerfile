FROM node:10

ENV NODE_VERSION 13.7.0
RUN apt update

RUN npm install && npm install --only=dev --no-shrinkwrap && npm run build
CMD ["npm", "start"]
