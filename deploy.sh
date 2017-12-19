#!/usr/bin/env bash

DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"

if [ $# -eq 0 ]
  then
    echo "Must specify: create or update"
fi

if [ "$1" == "create" ]
  then
    cd $DIR/deploy && npm run create
fi

if [ "$1" == "update" ]
  then
    cd $DIR/deploy && npm run update
fi
