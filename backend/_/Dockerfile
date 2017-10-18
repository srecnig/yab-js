FROM node:latest

ARG HOSTUID=1000
ARG HOSTGID=1000

# create mount directories
RUN mkdir /backend
RUN chown $HOSTUID:$HOSTGID /backend
VOLUME /backend

EXPOSE 8080

WORKDIR /backend

CMD /backend/_/startup.sh
