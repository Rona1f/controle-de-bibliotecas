/*
  Warnings:

  - The primary key for the `Book` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Book" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "cover" TEXT NOT NULL,
    "authors" TEXT NOT NULL,
    "rating" REAL NOT NULL,
    "year" INTEGER NOT NULL,
    "quantity" INTEGER NOT NULL,
    "available" INTEGER NOT NULL,
    "url" TEXT NOT NULL,
    "libraryId" TEXT NOT NULL,
    CONSTRAINT "Book_libraryId_fkey" FOREIGN KEY ("libraryId") REFERENCES "Library" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Book" ("authors", "available", "cover", "id", "libraryId", "name", "quantity", "rating", "url", "year") SELECT "authors", "available", "cover", "id", "libraryId", "name", "quantity", "rating", "url", "year" FROM "Book";
DROP TABLE "Book";
ALTER TABLE "new_Book" RENAME TO "Book";
CREATE TABLE "new__BookToUser" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL,
    CONSTRAINT "_BookToUser_A_fkey" FOREIGN KEY ("A") REFERENCES "Book" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "_BookToUser_B_fkey" FOREIGN KEY ("B") REFERENCES "User" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new__BookToUser" ("A", "B") SELECT "A", "B" FROM "_BookToUser";
DROP TABLE "_BookToUser";
ALTER TABLE "new__BookToUser" RENAME TO "_BookToUser";
CREATE UNIQUE INDEX "_BookToUser_AB_unique" ON "_BookToUser"("A", "B");
CREATE INDEX "_BookToUser_B_index" ON "_BookToUser"("B");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
