FROM node:14-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

ARG PORT
ENV PORT=$PORT

RUN npm run build

EXPOSE $PORT

CMD [ "npm", "start" ]