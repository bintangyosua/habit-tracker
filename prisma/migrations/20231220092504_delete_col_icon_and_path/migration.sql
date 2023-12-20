/*
  Warnings:

  - You are about to drop the column `icon` on the `Kategori` table. All the data in the column will be lost.
  - You are about to drop the column `path` on the `Kategori` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Kategori" DROP COLUMN "icon",
DROP COLUMN "path";
