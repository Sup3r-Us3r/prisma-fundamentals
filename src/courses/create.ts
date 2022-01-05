import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const course = await prisma.courses.create({
    data: {
      name: 'ReactJS',
      duration: 200,
      description: 'ReactJS Description',
      teacher: {
        connectOrCreate: {
          where: {
            name: 'John Doo',
          },
          create: {
            name: 'John Doo',
          }
        }
      }
    }
  });

  console.log({ course });
}

main();
