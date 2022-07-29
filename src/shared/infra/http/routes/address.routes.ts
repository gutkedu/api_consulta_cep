import { Router } from "express";
import { GetAddressController } from "@modules/address/useCases/getAddress/GetAddressController";
import { isCached } from "../middleware/isCached";

const addressRoute = Router();

const getAddressController = new GetAddressController();

addressRoute.get("/:cep", isCached, getAddressController.handle);

export { addressRoute };
