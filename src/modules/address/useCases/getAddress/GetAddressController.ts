import { validate } from "class-validator";
import { Request, Response } from "express";
import { container } from "tsyringe";

import { Cep } from "@modules/address/model/Cep";
import { AppError } from "@shared/errors/AppError";
import { GetAddressUseCase } from "./GetAddressUseCase";

export class GetAddressController {
  async handle(req: Request, res: Response): Promise<Response> {
    const { cep } = req.params;

    const cepValidation = new Cep();
    cepValidation.cep = cep;

    const error = await validate(cepValidation);

    if (error.length > 0) {
      throw new AppError("validation failed", 400, error);
    }

    const getAddressUseCase = container.resolve(GetAddressUseCase);

    const address = await getAddressUseCase.execute(cep);

    return res.status(200).json(address);
  }
}
