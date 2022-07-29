import fetch from "cross-fetch";
import { IAddressDTO } from "@modules/address/dtos/IAddressDTO";
import { IAddressProvider } from "../IAddressProvider";

export class ViaCepAddressProvider implements IAddressProvider {
  async findAddressByCep(cep: string): Promise<IAddressDTO> {
    const response = await fetch(`https://viacep.com.br/ws/${cep}/json`, {
      method: "GET",
    });
    const response_data = await response.json();
    return response_data as IAddressDTO;
  }
}
