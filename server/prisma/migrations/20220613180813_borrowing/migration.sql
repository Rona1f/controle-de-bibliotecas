/*
  Warnings:

  - You are about to drop the `_BookToUser` table. If the table is not empty, all the data it contains will be lost.
  - The primary key for the `Address` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- DropIndex
DROP INDEX "_BookToUser_B_index";

-- DropIndex
DROP INDEX "_BookToUser_AB_unique";

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "_BookToUser";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "Borrowing" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "borrowedAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "dueDate" DATETIME NOT NULL,
    "renewed_times" INTEGER NOT NULL DEFAULT 0,
    "userId" TEXT NOT NULL,
    "bookId" TEXT NOT NULL,
    CONSTRAINT "Borrowing_bookId_fkey" FOREIGN KEY ("bookId") REFERENCES "Book" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Borrowing_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Address" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "street" TEXT NOT NULL,
    "number" INTEGER NOT NULL,
    "city" TEXT NOT NULL,
    "state" TEXT NOT NULL,
    "hood" TEXT NOT NULL,
    "reference" TEXT,
    "libraryId" TEXT,
    "userId" TEXT,
    CONSTRAINT "Address_libraryId_fkey" FOREIGN KEY ("libraryId") REFERENCES "Library" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "Address_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_Address" ("city", "hood", "id", "libraryId", "number", "reference", "state", "street", "userId") SELECT "city", "hood", "id", "libraryId", "number", "reference", "state", "street", "userId" FROM "Address";
DROP TABLE "Address";
ALTER TABLE "new_Address" RENAME TO "Address";
CREATE UNIQUE INDEX "Address_libraryId_key" ON "Address"("libraryId");
CREATE UNIQUE INDEX "Address_userId_key" ON "Address"("userId");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
