### Base
FROM golang

ENV APP_DIR "/app"
ENV PATH "${APP_DIR}/bin:${PATH}"

WORKDIR ${APP_DIR}

COPY go.mod .
COPY go.sum .

COPY . .

ENTRYPOINT ["/bin/sh", "/app/docker-entrypoint.sh"]

# run application
CMD ["serve"]
