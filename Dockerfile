FROM  node:16.19.0

COPY . /reja
WORKDIR /reja
CMD npm install && node server.js


# DOCKER => DOCKER IMAGE => direct docker: CONTAINER
# DOCKER => DOCKER IMAGE => docker-compose: CONTAINER

