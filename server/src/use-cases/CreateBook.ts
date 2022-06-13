import { BookDatabase } from "../repositories/BookRepository";

export interface CreateBookProps {
  id: string;
  name: string;
  cover: string;
  authors: string;
  rating: number;
  year: number;
  quantity: number;
  available: number;
  url: string;
  libraryId: string;
}

export class CreateBook {
  constructor(private bookRepository: BookDatabase) {}
  async execute({
    id,
    cover,
    authors,
    rating,
    year,
    quantity,
    name,
    url,
    libraryId,
  }: CreateBookProps) {
    await this.bookRepository.createBook(
      {
        id,
        cover,
        url,
        authors,
        rating,
        year,
        name,
        quantity,
      },
      libraryId
    );
  }
}
