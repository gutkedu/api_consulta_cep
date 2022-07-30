import "reflect-metadata";
import express, { Response, Request, NextFunction } from "express";
import "express-async-errors";
import helmet from "helmet";
import { auth } from "express-openid-connect";

import "@shared/container";
import { router } from "./routes";
import { AppError } from "../../errors/AppError";
import { client } from "../redis/client";

require("dotenv").config();

client.connect();

const app = express();

app.use(express.json());

app.use(helmet());

app.use(
  auth({
    issuerBaseURL: process.env.ISSUER_BASE_URL,
    baseURL: process.env.BASE_URL,
    clientID: process.env.CLIENT_ID,
    secret: process.env.SECRET,
    authRequired: false,
    auth0Logout: true,
  })
);

app.use(router);

app.use(
  (err: Error, request: Request, response: Response, next: NextFunction) => {
    if (err instanceof AppError) {
      return response.status(err.statusCode).json({
        message: err.message,
        error: err.validation,
      });
    }

    return response.status(500).json({
      status: "error",
      message: `Internal server error - ${err.message}`,
    });
  }
);

export { app };
