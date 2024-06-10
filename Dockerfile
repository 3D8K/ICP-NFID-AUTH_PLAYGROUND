FROM node:latest

WORKDIR /app

COPY ./src/frontend/package*.json ./

RUN npm install

COPY ./src/frontend/. .

COPY ./src/declarations/backend/ ../declarations/backend/

RUN npm run build

CMD ["npm", "start"];