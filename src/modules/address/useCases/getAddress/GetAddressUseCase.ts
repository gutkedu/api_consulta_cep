import { inject, injectable } from "tsyringe";
import { IAddressDTO } from "@modules/address/dtos/IAddressDTO";
import { IAddressProvider } from "@shared/container/providers/AddressProvider/IAddressProvider";
import { client } from "@shared/infra/redis/client";
import cacheConfig from "@config/cacheConfig";

@injectable()
export class GetAddressUseCase {
  constructor(
    @inject("AddressProvider")
    private addressProvider: IAddressProvider
  ) {}

  async execute(cep: string): Promise<IAddressDTO> {
    const address = await this.addressProvider.findAddressByCep(cep);

    await client.setEx(
      cep,
      cacheConfig.cacheTimeInSeconds,
      JSON.stringify(address)
    );

    return address;
  }
}
