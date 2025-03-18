/*
  Warnings:

  - You are about to drop the column `productVariantId` on the `discount` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "discount" DROP CONSTRAINT "Discount_productVariant_fk";

-- DropIndex
DROP INDEX "Discount_productVariantId_idx";

-- AlterTable
ALTER TABLE "discount" DROP COLUMN "productVariantId";

-- AlterTable
ALTER TABLE "productVariants" ADD COLUMN     "discountId" INTEGER;

-- CreateIndex
CREATE INDEX "Discount_name_idx" ON "discount"("name");

-- CreateIndex
CREATE INDEX "ProductVariants_productId_idx" ON "productVariants"("productId");

-- AddForeignKey
ALTER TABLE "productVariants" ADD CONSTRAINT "productVariants_discountId_fkey" FOREIGN KEY ("discountId") REFERENCES "discount"("id") ON DELETE SET NULL ON UPDATE CASCADE;
