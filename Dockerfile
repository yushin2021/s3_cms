FROM node:alpine

WORKDIR /usr/src/app

RUN apk update && \
    npm install -g npm
