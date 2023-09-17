/*
  Warnings:

  - You are about to drop the `Tag` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Tag";

-- CreateTable
CREATE TABLE "ExpenseTag" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "label" TEXT NOT NULL,
    "userId" TEXT,

    CONSTRAINT "ExpenseTag_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "IncomeTag" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "label" TEXT NOT NULL,
    "userId" TEXT,

    CONSTRAINT "IncomeTag_pkey" PRIMARY KEY ("id")
);
