FROM node:8.11.4
WORKDIR /app
ADD . /app
RUN npm install
EXPOSE 3000
CMD npm start