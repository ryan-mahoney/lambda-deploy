import express      from "express";
import path         from "path";
import cookieParser from "cookie-parser";
import bodyParser   from "body-parser";
import cors         from "cors";
import compression  from "compression";
import awsServerlessExpressMiddleware from "aws-serverless-express/middleware";

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
import appController from "./controllers/application-controller.js";
app.get("/", appController.home);

export default app;
