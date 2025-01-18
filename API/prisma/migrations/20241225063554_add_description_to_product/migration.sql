/*
  Warnings:

  - You are about to drop the column `updatedAt` on the `customer` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `discount` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `customer` DROP COLUMN `updatedAt`;

-- AlterTable
ALTER TABLE `discount` DROP COLUMN `updatedAt`;
