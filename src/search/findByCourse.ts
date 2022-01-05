import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const course = await prisma.courses.findMany({
    where: {
      id: '2aa663c7-f96c-4130-bd66-dd865d6509de'
    },
    include: {
      modules: true
    }
  });

  console.log(JSON.stringify(course, null, 2));
}

main();
