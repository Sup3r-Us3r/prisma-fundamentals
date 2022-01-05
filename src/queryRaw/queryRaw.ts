import { PrismaClient, Prisma, Modules } from '@prisma/client';

const prima = new PrismaClient();

async function main() {
  const result = await prima.$queryRaw<Modules[]>(Prisma.sql`
    SELECT * FROM modules
  `);

  console.log({ result });
}

main();
