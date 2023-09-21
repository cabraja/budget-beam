/*
  Warnings:

  - Added the required column `expenseTagId` to the `Expense` table without a default value. This is not possible if the table is not empty.
  - Added the required column `incomeTagId` to the `Income` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Expense" ADD COLUMN     "expenseTagId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "ExpenseTag" ADD COLUMN     "color" TEXT;

-- AlterTable
ALTER TABLE "Income" ADD COLUMN     "incomeTagId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "IncomeTag" ADD COLUMN     "color" TEXT;

-- AddForeignKey
ALTER TABLE "Expense" ADD CONSTRAINT "Expense_expenseTagId_fkey" FOREIGN KEY ("expenseTagId") REFERENCES "ExpenseTag"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Income" ADD CONSTRAINT "Income_incomeTagId_fkey" FOREIGN KEY ("incomeTagId") REFERENCES "IncomeTag"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
