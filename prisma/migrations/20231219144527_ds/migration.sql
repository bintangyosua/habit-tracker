/*
  Warnings:

  - Made the column `nama` on table `User` required. This step will fail if there are existing NULL values in that column.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_User" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nama" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "tanggal_lahir" DATETIME NOT NULL,
    "kota" TEXT NOT NULL
);
INSERT INTO "new_User" ("email", "id", "kota", "nama", "password", "tanggal_lahir") SELECT "email", "id", "kota", "nama", "password", "tanggal_lahir" FROM "User";
DROP TABLE "User";
ALTER TABLE "new_User" RENAME TO "User";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
