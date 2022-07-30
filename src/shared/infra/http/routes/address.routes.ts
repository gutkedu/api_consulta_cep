import { Router } from "express";
import { requiresAuth } from "express-openid-connect";

import { GetAddressController } from "@modules/address/useCases/getAddress/GetAddressController";
import { isCached } from "../middleware/isCached";

const addressRoute = Router();

const getAddressController = new GetAddressController();

addressRoute.post("/", requiresAuth(), isCached, getAddressController.handle);

export { addressRoute };
