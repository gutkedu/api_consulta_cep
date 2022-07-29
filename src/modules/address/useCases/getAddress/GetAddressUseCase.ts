import { inject, injectable } from "tsyringe";
import { IAddressDTO } from "@modules/address/dtos/IAddressDTO";
import { IAddressProvider } from "@shared/container/providers/AddressProvider/IAddressProvider";

@injectable()
export class GetAddressUseCase {
  constructor(
    @inject("AddressProvider")
    private addressProvider: IAddressProvider
  ) {}

  async execute(cep: string): Promise<IAddressDTO> {
    //check with redis if data already exist

    const address = await this.addressProvider.findAddressByCep(cep);

    return address;
  }
}
