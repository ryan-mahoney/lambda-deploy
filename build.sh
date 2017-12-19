#!/usr/bin/env bash

DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"

$DIR/node_modules/webpack/bin/webpack.js --progress --colors --config $DIR/app/webpack.prod.server.js
