import { UserDatabase } from "../repositories/UserRepository";
import { Address } from "../util/types";

export interface CreateUserProps {
  name: string;
  cpf: string;
  birthday: Date;
  email: string;
  phone: string;
  password: string;
  address: Address;
}

export class CreateUser {
  constructor(private userDatabase: UserDatabase) {}
  async execute({
    name,
    cpf,
    birthday,
    password,
    phone,
    address,
    email,
  }: CreateUserProps) {
    await this.userDatabase.createUser(
      {
        name,
        cpf,
        birthday,
        password,
        phone,
        email,
      },
      address
    );
  }
}
