
import { LibraryDatabase } from "../repositories/LibraryRepository";
import { Address } from "../util/types";

export interface CreateLibraryProps {
  name: string;
  email: string;
  password: string;
  phone: string;
  isPublic: boolean;
}

export class CreateLibrary {
  constructor(private libraryRepository: LibraryDatabase) {}
  async execute(
    { name, email, password, phone, isPublic }: CreateLibraryProps,
    { street, number, city, state, hood, reference }: Address
  ) {
    await this.libraryRepository.createLibrary(
      {
        name,
        email,
        password,
        phone,
        isPublic,
      },
      {
        street,
        number,
        city,
        state,
        hood,
        reference,
      }
    );
  }
}
