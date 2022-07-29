import { GetAddressController } from "@modules/address/useCases/getAddress/GetAddressController";
import { Router } from "express";

const addressRoute = Router();

const getAddressController = new GetAddressController();

addressRoute.get("/:cep", getAddressController.handle);

export { addressRoute };
