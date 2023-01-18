import { Prisma } from '.prisma/responses-client';
import { PrismaClient } from '.prisma/responses-client';
import * as process from 'process';

const prisma = new PrismaClient();

async function fillDb() {
  const responses: Prisma.ResponseCreateInput[] = [
    {
      customerId: '63a898135261f8c9e2ec261d',
      contractorId: '63a898135261f8c9e2ec261d',
      taskId: '1',
      evaluation: 3,
      responseText: 'Новое',
    },
    {
      customerId: '63a898135261f8c9e2ec261d',
      contractorId: '63a898135261f8c9e2ec261d',
      taskId: '2',
      evaluation: 5,
      responseText: 'Новое',
    },
  ];
  await Promise.all(
    responses.map(async (response) => {
      await prisma.response.create({
        data: response,
      });
    })
  );
  console.info('Database was filled');
}

fillDb()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (err) => {
    console.error(err);
    await prisma.$disconnect();

    process.exit(1);
  });
