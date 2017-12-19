import React from 'react';
import ReactDOMServer from 'react-dom/server';
import Home from './../components/Home.js';

const ApplicationController = {
  home: (req, res) => {
    res.setHeader('Content-Type', 'text/html; charset=utf-8');
    res.send(`<html>
      <head>
        <title>Lambda Deploy</title>
      </head>
      <body>
        ${ReactDOMServer.renderToString(<Home />)}
      </body>
    </html>`)
  }
};

export default ApplicationController;
