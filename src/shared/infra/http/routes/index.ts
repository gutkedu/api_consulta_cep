import { Request, Response, Router } from "express";
import { addressRoute } from "./address.routes";
import { authRoutes } from "./auth.routes";

const router = Router();



router.use("/", authRoutes);
router.use("/address", addressRoute);

export { router };
