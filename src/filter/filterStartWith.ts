import { PrismaClient } from '@prisma/client';

const prima = new PrismaClient({
  log: ['query']
});

async function main() {
  const result = await prima.courses.findMany({
    where: {
      name: {
        startsWith: 'react',
        mode: 'insensitive'
      }
    }
  });

  console.log({ result });
}

main();
