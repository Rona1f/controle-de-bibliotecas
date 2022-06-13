import { Address } from "../util/types";

export interface LibraryDatabaseProps {
  name: string;
  email: string;
  password: string;
  phone: string;
  isPublic: boolean;
}

export interface LibraryDatabase {
    createLibrary: (props: LibraryDatabaseProps, address: Address) => Promise<void>;
}
