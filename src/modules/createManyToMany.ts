import { PrismaClient } from '@prisma/client';

const prima = new PrismaClient();

async function main() {
  const coursesModules = await prima.coursesModules.create({
    data: {
      course_id: 'ce557082-a0b0-490e-891b-c79f3e5410b8',
      module_id: '00be8c45-9ba3-4394-973f-fc11a12ba0f4'
    },
  });

  console.log({ coursesModules });
}

main();
