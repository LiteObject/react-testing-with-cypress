FROM node:20

WORKDIR /app

COPY . ./

RUN npm install --silent

EXPOSE 3000

CMD ["npm", "start"]