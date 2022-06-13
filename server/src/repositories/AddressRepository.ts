export interface AddressDatabaseProps {
  street: string;
  number: number;
  city: string;
  state: string;
  hood: string;
  reference?: string;
}

export interface AddressDatabase {
  createAddress: (props: AddressDatabaseProps) => Promise<void>;
}
