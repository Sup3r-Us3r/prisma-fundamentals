import { PrismaClient } from '@prisma/client';

const prima = new PrismaClient();

async function main() {
  const result = await prima.coursesModules.delete({
    where: {
      id: '17e3d0cc-8c3e-43fd-98d3-ac43c3ad3c0e'
    }
  });

  console.log({ result });
}

main();
