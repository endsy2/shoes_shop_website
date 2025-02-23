/*
  Warnings:

  - You are about to drop the column `productId` on the `discount` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "discount" DROP CONSTRAINT "Discount_productId_fk";

-- DropIndex
DROP INDEX "Discount_productId_idx";

-- AlterTable
ALTER TABLE "discount" DROP COLUMN "productId",
ADD COLUMN     "productVariantId" INTEGER;

-- CreateIndex
CREATE INDEX "Discount_productVariantId_idx" ON "discount"("productVariantId");

-- AddForeignKey
ALTER TABLE "discount" ADD CONSTRAINT "Discount_productVariant_fk" FOREIGN KEY ("productVariantId") REFERENCES "productVariants"("id") ON DELETE CASCADE ON UPDATE CASCADE;
