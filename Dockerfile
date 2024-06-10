FROM node:19-alpine

WORKDIR /app

COPY package*.json ./

COPY . .

RUN npm i

RUN npm run build

EXPOSE 3000

CMD ["npm", "run", "start"]