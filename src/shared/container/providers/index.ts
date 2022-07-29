import { container } from "tsyringe";
import { IAddressProvider } from "./AddressProvider/IAddressProvider";
import { ViaCepAddressProvider } from "./AddressProvider/implementations/ViaCepAddressProvider";

container.registerSingleton<IAddressProvider>(
  "AddressProvider",
  ViaCepAddressProvider
);
