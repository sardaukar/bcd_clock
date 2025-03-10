FROM socialengine/nginx-spa:latest

RUN apt update
RUN apt install -y curl

COPY ./build /app

RUN chmod -R 777 /app
