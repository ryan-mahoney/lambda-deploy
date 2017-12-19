const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const compression = require("compression");
const awsServerlessExpressMiddleware = require("aws-serverless-express/middleware");
const app = express();

// express configuration
app.use(compression());
app.use(cookieParser());
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(awsServerlessExpressMiddleware.eventContext());

// serve static files when running locally in development mode
if (process.env.NODE_ENV && process.env.NODE_ENV == 'dev') {
  const serveStatic = require("serve-static");
  app.use(serveStatic(`${__dirname}/public`));
}

// controllers
const appController = require(`${__dirname}/controllers/application-controller.js`);
app.get("/", appController.home);

module.exports = app;
