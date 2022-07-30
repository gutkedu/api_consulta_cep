import { AppError } from "@shared/errors/AppError";
import { NextFunction, Request, Response } from "express";
import { client } from "../../redis/client";

export async function isCached(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const { cep } = req.body;

  const data = await client.get(cep).catch((err) => {
    throw new AppError("redis error", err);
  });

  if (data != null) {
    return res.status(200).send(data);
  } else {
    return next();
  }
}
