/*
  Warnings:

  - A unique constraint covering the columns `[teacher_id]` on the table `courses` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `teacher_id` to the `courses` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "courses" ADD COLUMN     "teacher_id" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "courses_teacher_id_key" ON "courses"("teacher_id");

-- AddForeignKey
ALTER TABLE "courses" ADD CONSTRAINT "courses_teacher_id_fkey" FOREIGN KEY ("teacher_id") REFERENCES "teachers"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
