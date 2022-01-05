import { PrismaClient } from '@prisma/client';

const prima = new PrismaClient();

async function main() {
  const module = await prima.modules.create({
    data: {
      name: 'Module 1',
      description: 'Module 1 Description',
      courses: {
        create: {
          course: {
            connect: {
              id: 'ce557082-a0b0-490e-891b-c79f3e5410b8'
            }
          }
        }
      }
    },
  });

  console.log({ module });
}

main();
