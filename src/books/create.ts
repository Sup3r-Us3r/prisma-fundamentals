import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const book = await prisma.books.create({
    data: {
      name: 'Book 1',
      author: {
        connectOrCreate: {
          where: {
            name: 'John Doo',
          },
          create: {
            name: 'John Doo'
          }
        }
      }
    }
  });

  console.log({ book });
}

main();
