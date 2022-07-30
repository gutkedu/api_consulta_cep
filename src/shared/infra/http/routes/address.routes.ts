import { Router } from "express";
import { GetAddressController } from "@modules/address/useCases/getAddress/GetAddressController";
import { isCached } from "../middleware/isCached";
import usersConfig from "@config/usersConfig";
const basicAuth = require("express-basic-auth");

const addressRoute = Router();

const getAddressController = new GetAddressController();

addressRoute.use(
  basicAuth({
    users: usersConfig,
  })
);

addressRoute.post("/", isCached, getAddressController.handle);

export { addressRoute };
