/*
  Warnings:

  - You are about to drop the column `productId` on the `orderitem` table. All the data in the column will be lost.
  - Added the required column `productVariantId` to the `orderitem` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "orderitem" DROP CONSTRAINT "OrderItem_productId_fk";

-- DropIndex
DROP INDEX "OrderItem_productId_idx";

-- AlterTable
ALTER TABLE "orderitem" DROP COLUMN "productId",
ADD COLUMN     "productVariantId" INTEGER NOT NULL;

-- CreateIndex
CREATE INDEX "OrderItem_productId_idx" ON "orderitem"("productVariantId");

-- AddForeignKey
ALTER TABLE "orderitem" ADD CONSTRAINT "OrderItem_productId_fk" FOREIGN KEY ("productVariantId") REFERENCES "productVariants"("id") ON DELETE CASCADE ON UPDATE CASCADE;
