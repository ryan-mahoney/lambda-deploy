#!/usr/bin/env bash

DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"

NODE_ENV=dev $DIR/node_modules/nodemon/bin/nodemon.js $DIR/app/server.local.js --watch $DIR/app --exec ./node_modules/babel-cli/bin/babel-node.js --presets es2015,stage-0,stage-2,react
