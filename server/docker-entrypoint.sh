#!/bin/sh

set -e

if [ "$1" = 'serve' ]; then
  go build -o ${APP_DIR}/laughing-train
  exec ${APP_DIR}/laughing-train
fi
