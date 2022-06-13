export interface BookDatabaseProps {
  id: string;
  name: string;
  cover: string;
  authors: string;
  rating: number;
  year: number;
  url: string;
  quantity: number
}

export interface BookDatabase {
  createBook: (props: BookDatabaseProps, libraryId: string) => Promise<void>;
  findBook: (id: string) => Promise<void>;
  removeBook: (id: string) => Promise<void>;
}
