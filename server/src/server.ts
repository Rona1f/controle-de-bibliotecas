import express from "express";
import { LibraryDatabaseProps } from "./repositories/LibraryRepository";
import { PrismaRepository } from "./repositories/prisma/PrismaRepository";
import { BorrowBook } from "./use-cases/BorrowBook";
import { CreateBook } from "./use-cases/CreateBook";
import { CreateLibrary } from "./use-cases/CreateLibrary";
import { CreateUser } from "./use-cases/CreateUser";
import { Address } from "./util/types";

const app = express();
app.use(express.json());

const prismaRepository = new PrismaRepository();

app.post("/criar_biblioteca", (req, res) => {
  const {
    name,
    email,
    phone,
    isPublic,
    street,
    number,
    city,
    state,
    hood,
    reference,
  } = req.body;

  const createLibrary = new CreateLibrary(prismaRepository);

  createLibrary.execute(
    { name, email, phone, isPublic } as LibraryDatabaseProps,
    { street, number, city, state, hood, reference } as Address
  );

  return res.status(201).send();
});

app.post("/criar_usuario", (req, res) => {
  req.body.birthday = new Date(req.body.birthday);
  const createUser = new CreateUser(prismaRepository);
  createUser.execute(req.body);
  return res.status(201).send();
});

app.post("/adicionar_livro", (req, res) => {
  const createBook = new CreateBook(prismaRepository);
  createBook.execute(req.body);
  return res.status(201).send();
});

app.post("/emprestar_livro", (req, res) => {
  const borrowBook = new BorrowBook(prismaRepository);
  req.body.dueDate = new Date(req.body.dueDate);
  borrowBook.execute(req.body);
  return res.status(201).send();
});


app.listen(3333, () => {
  console.log("Server is running");
});
