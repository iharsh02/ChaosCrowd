/*
  Warnings:

  - You are about to drop the column `key` on the `blinks` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX "blinks_key_key";

-- AlterTable
ALTER TABLE "blinks" DROP COLUMN "key";
