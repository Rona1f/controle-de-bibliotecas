import { Address } from "../util/types";
import { AddressProps } from "./AddressRepository";

export interface UserProps {
  name: string;
  cpf: string;
  birthday: Date;
  email: string;
  phone: string;
  password: string;
}

export interface UserDatabase {
  createUser: (props: UserProps, address: Address) => Promise<void>;
}
