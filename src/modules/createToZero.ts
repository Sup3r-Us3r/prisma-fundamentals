import { PrismaClient } from '@prisma/client';

const prima = new PrismaClient();

async function main() {
  const coursesModules = await prima.coursesModules.create({
    data: {
      course: {
        create: {
          name: 'Course 1',
          description: 'Course 1 description',
          duration: 200,
          teacher: {
            create: {
              name: 'John Doo 1'
            }
          }
        },
      },
      module: {
        create: {
          name: 'Module 2',
          description: 'Module 2 description'
        }
      }
    },
  });

  console.log({ coursesModules });
}

main();
