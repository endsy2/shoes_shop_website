/*
  Warnings:

  - You are about to drop the column `productId` on the `productimage` table. All the data in the column will be lost.
  - Added the required column `productVariantId` to the `productimage` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "productimage" DROP CONSTRAINT "ProductImage_productId_fk";

-- DropIndex
DROP INDEX "ProductImage_productId_idx";

-- AlterTable
ALTER TABLE "productimage" DROP COLUMN "productId",
ADD COLUMN     "productVariantId" INTEGER NOT NULL;

-- CreateIndex
CREATE INDEX "ProductImage_productId_idx" ON "productimage"("productVariantId");

-- AddForeignKey
ALTER TABLE "productimage" ADD CONSTRAINT "ProductImage_productVariantId_fk" FOREIGN KEY ("productVariantId") REFERENCES "productVariants"("id") ON DELETE CASCADE ON UPDATE CASCADE;
