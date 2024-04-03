FROM node:14

RUN mkdir -p /srv && chmod 777 -R /srv

COPY ./app /srv

RUN cd /srv && npm i

EXPOSE 80

WORKDIR /srv