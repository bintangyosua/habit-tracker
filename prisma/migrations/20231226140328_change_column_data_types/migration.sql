/*
  Warnings:

  - You are about to alter the column `nama` on the `habit` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `VarChar(50)`.
  - You are about to alter the column `nama` on the `kategori` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `VarChar(50)`.
  - You are about to alter the column `warna` on the `kategori` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `VarChar(20)`.
  - You are about to alter the column `name` on the `role` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `VarChar(20)`.
  - You are about to alter the column `nama` on the `task` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `VarChar(50)`.
  - You are about to alter the column `nama` on the `user` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `VarChar(50)`.
  - You are about to alter the column `email` on the `user` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `VarChar(50)`.
  - You are about to alter the column `password` on the `user` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `VarChar(50)`.
  - You are about to alter the column `kota` on the `user` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `VarChar(30)`.

*/
-- AlterTable
ALTER TABLE `habit` MODIFY `nama` VARCHAR(50) NOT NULL,
    MODIFY `deskripsi` VARCHAR(200) NOT NULL;

-- AlterTable
ALTER TABLE `kategori` MODIFY `nama` VARCHAR(50) NOT NULL,
    MODIFY `warna` VARCHAR(20) NOT NULL;

-- AlterTable
ALTER TABLE `role` MODIFY `name` VARCHAR(20) NOT NULL;

-- AlterTable
ALTER TABLE `task` MODIFY `nama` VARCHAR(50) NOT NULL,
    MODIFY `deskripsi` VARCHAR(200) NOT NULL;

-- AlterTable
ALTER TABLE `user` MODIFY `nama` VARCHAR(50) NOT NULL,
    MODIFY `email` VARCHAR(50) NOT NULL,
    MODIFY `password` VARCHAR(50) NOT NULL,
    MODIFY `kota` VARCHAR(30) NOT NULL;
