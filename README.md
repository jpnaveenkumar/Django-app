# Django-app

#Server Deployment :

$ docker-compose up 

The server and database containers runs in the port 8000 and 5555 respectively

#Client Deployment :

$ npm install => download dependencies

$ npm run build => generates production client build for deployment

$ cd build

$ python3 -m http.server 3001 => client server serves in the port 3001
