import { PrismaClient } from '@prisma/client';

const prima = new PrismaClient({
  log: ['query']
});

async function main() {
  const result = await prima.courses.findMany({
    where: {
      OR: [
        {
          name: {
            startsWith: 'react',
            mode: 'insensitive'
          }
        },
        { name: 'Elixir' }
      ],
      AND: {
        duration: 300
      },
    }
  });

  console.log({ result });
}

main();
