/*
  Warnings:

  - You are about to drop the column `orderDate` on the `order` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `order` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `product` table. All the data in the column will be lost.
  - Added the required column `Description` to the `product` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `order` DROP COLUMN `orderDate`,
    DROP COLUMN `updatedAt`;

-- AlterTable
ALTER TABLE `product` DROP COLUMN `updatedAt`,
    ADD COLUMN `Description` VARCHAR(191) NOT NULL;
