/*
  Warnings:

  - A unique constraint covering the columns `[name]` on the table `teachers` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "teachers_name_key" ON "teachers"("name");
