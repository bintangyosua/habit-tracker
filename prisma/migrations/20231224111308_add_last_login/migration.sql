-- AlterTable
ALTER TABLE `user` ADD COLUMN `last_login` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3);