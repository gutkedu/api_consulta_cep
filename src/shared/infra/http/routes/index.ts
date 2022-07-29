import { Request, Response, Router } from "express";
import { addressRoute } from "./address.routes";

const router = Router();

router.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

router.use("/address", addressRoute);

export { router };
