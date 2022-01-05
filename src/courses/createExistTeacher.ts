import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const course = await prisma.courses.create({
    data: {
      name: 'React Native',
      duration: 200,
      description: 'React Native Description',
      teacher: {
        connect: {
          id: '4d1aa476-451d-4269-b01b-37cacbabffe4'
        }
      }
    }
  });

  console.log({ course });
}

main();
