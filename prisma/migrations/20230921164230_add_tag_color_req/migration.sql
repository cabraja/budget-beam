/*
  Warnings:

  - Made the column `color` on table `ExpenseTag` required. This step will fail if there are existing NULL values in that column.
  - Made the column `color` on table `IncomeTag` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "ExpenseTag" ALTER COLUMN "color" SET NOT NULL;

-- AlterTable
ALTER TABLE "IncomeTag" ALTER COLUMN "color" SET NOT NULL;
