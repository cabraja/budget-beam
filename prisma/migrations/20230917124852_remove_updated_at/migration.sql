/*
  Warnings:

  - You are about to drop the column `updatedAt` on the `Expense` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `ExpenseTag` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `Income` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `IncomeTag` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Expense" DROP COLUMN "updatedAt";

-- AlterTable
ALTER TABLE "ExpenseTag" DROP COLUMN "updatedAt";

-- AlterTable
ALTER TABLE "Income" DROP COLUMN "updatedAt";

-- AlterTable
ALTER TABLE "IncomeTag" DROP COLUMN "updatedAt";
