import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const author = await prisma.authors.create({
    data: {
      name: 'John Doo 1',
      books: {
        createMany: {
          skipDuplicates: true,
          data: [
            { name: 'Book 3' },
            { name: 'Book 3' },
            { name: 'Book 3' },
            { name: 'Book 4' },
            { name: 'Book 5' },
          ],
        }
      }
    }
  });

  console.log({ author });
}

main();
