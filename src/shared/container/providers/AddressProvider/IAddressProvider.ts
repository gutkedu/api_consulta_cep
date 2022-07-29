import { IAddressDTO } from "@modules/address/dtos/IAddressDTO";

export interface IAddressProvider {
  findAddressByCep(cep: string): Promise<IAddressDTO>;
}
