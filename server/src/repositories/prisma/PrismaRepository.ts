import { prisma } from "../../prisma";
import { Address } from "../../util/types";
import { BookDatabase, BookDatabaseProps } from "../BookRepository";
import {
  BorrowingDatabase,
  BorrowingDatabaseProps,
} from "../BorrowingRepository";
import { LibraryDatabaseProps, LibraryDatabase } from "../LibraryRepository";
import { UserDatabase, UserProps } from "../UserRepository";

export class PrismaRepository
  implements LibraryDatabase, BookDatabase, UserDatabase, BorrowingDatabase
{
  async createBorrow({ bookId, userId, dueDate }: BorrowingDatabaseProps) {
    await prisma.borrowing.create({
      data: {
        dueDate,
        book: {
          connect: {
            id: bookId,
          },
        },
        user: {
          connect: {
            id: userId,
          },
        },
      },
    });
  }

  async createUser(
    { name, cpf, birthday, email, phone, password }: UserProps,
    { street, number, city, state, hood, reference }: Address
  ) {
    await prisma.user.create({
      data: {
        name,
        cpf,
        birthday,
        email,
        phone,
        password,
        address: {
          create: {
            street,
            number,
            city,
            state,
            hood,
            reference,
          },
        },
      },
    });
  }

  async removeBook(id: string) {
    await prisma.book.delete({
      where: {
        id,
      },
    });
  }
  async findBook(id: string) {
    await prisma.book.findUnique({
      where: {
        id,
      },
    });
  }

  async createBook(
    {
      id,
      name,
      cover,
      authors,
      rating,
      year,
      url,
      quantity,
    }: BookDatabaseProps,
    libraryId: string
  ) {
    await prisma.book.create({
      data: {
        id,
        name,
        cover,
        authors,
        rating,
        year,
        url,
        quantity,
        available: quantity,
        library: {
          connect: { id: libraryId },
        },
      },
    });
  }

  async createLibrary(
    { name, email, phone, isPublic }: LibraryDatabaseProps,
    { street, number, city, state, hood, reference }: Address
  ) {
    await prisma.library.create({
      data: {
        name,
        email,
        phone,
        isPublic,
        address: {
          create: {
            street,
            number,
            city,
            state,
            hood,
            reference,
          },
        },
      },
    });
  }
}
