import { Prisma } from '.prisma/comments-client';
import { PrismaClient } from '.prisma/comments-client';
import * as process from 'process';

const prisma = new PrismaClient();

async function fillDb() {
  const comments: Prisma.CommentCreateInput[] = [
    {
      authorId: '63a898135261f8c9e2ec261d',
      taskId: 1,
      text: 'Новое',
    },
    {
      authorId: '63a8985b5261f8c9e2ec2623',
      taskId: 1,
      text: 'Старое',
    },
    {
      authorId: '63aac06a99db5a97f8847357',
      taskId: 1,
      text: 'Старое',
    },
    {
      authorId: '63a898135261f8c9e2ec261d',
      taskId: 2,
      text: 'Старое',
    },
    {
      authorId: '63a8985b5261f8c9e2ec2623',
      taskId: 2,
      text: 'Старое',
    },
    {
      authorId: '63aac06a99db5a97f8847357',
      taskId: 2,
      text: 'Старое',
    },
    {
      authorId: '63a898135261f8c9e2ec261d',
      taskId: 2,
      text: 'Старое',
    },
    {
      authorId: '63a898135261f8c9e2ec261d',
      taskId: 3,
      text: 'Старое',
    },
    {
      authorId: '63a8985b5261f8c9e2ec2623',
      taskId: 3,
      text: 'Старое',
    },
    {
      authorId: '63aac06a99db5a97f8847357',
      taskId: 3,
      text: 'Старое',
    },
    {
      authorId: '63a898135261f8c9e2ec261d',
      taskId: 3,
      text: 'Старое',
    },
    {
      authorId: '63a898135261f8c9e2ec261d',
      taskId: 4,
      text: 'Старое',
    },
    {
      authorId: '63a8985b5261f8c9e2ec2623',
      taskId: 4,
      text: 'Старое',
    },
    {
      authorId: '63aac06a99db5a97f8847357',
      taskId: 4,
      text: 'Старое',
    },
    {
      authorId: '63a898135261f8c9e2ec261d',
      taskId: 4,
      text: 'Старое',
    },
    {
      authorId: '63a898135261f8c9e2ec261d',
      taskId: 5,
      text: 'Старое',
    },
    {
      authorId: '63a8985b5261f8c9e2ec2623',
      taskId: 5,
      text: 'Старое',
    },
    {
      authorId: '63aac06a99db5a97f8847357',
      taskId: 5,
      text: 'Старое',
    },
  ];
  await Promise.all(
    comments.map(async (comment) => {
      await prisma.comment.create({
        data: comment,
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

// let comments: Prisma.CommentCreateInput[] = [
//     {
//       authorId: '63a898135261f8c9e2ec261d',
//       taskId: 1,
//       text: 'Новое',
//     },
//     {
//       authorId: '63a8985b5261f8c9e2ec2623',
//       taskId: 1,
//       text: 'Старое',
//     },
//     {
//       authorId: '63aac06a99db5a97f8847357',
//       taskId: 1,
//       text: 'Старое',
//     },
//     {
//       authorId: '63a898135261f8c9e2ec261d',
//       taskId: 2,
//       text: 'Старое',
//     },
//     {
//       authorId: '63a8985b5261f8c9e2ec2623',
//       taskId: 2,
//       text: 'Старое',
//     },
//     {
//       authorId: '63aac06a99db5a97f8847357',
//       taskId: 2,
//       text: 'Старое',
//     },
//     {
//       authorId: '63a898135261f8c9e2ec261d',
//       taskId: 2,
//       text: 'Старое',
//     },
//     {
//       authorId: '63a898135261f8c9e2ec261d',
//       taskId: 3,
//       text: 'Старое',
//     },
//     {
//       authorId: '63a8985b5261f8c9e2ec2623',
//       taskId: 3,
//       text: 'Старое',
//     },
//     {
//       authorId: '63aac06a99db5a97f8847357',
//       taskId: 3,
//       text: 'Старое',
//     },
//     {
//       authorId: '63a898135261f8c9e2ec261d',
//       taskId: 3,
//       text: 'Старое',
//     },
//     {
//       authorId: '63a898135261f8c9e2ec261d',
//       taskId: 4,
//       text: 'Старое',
//     },
//     {
//       authorId: '63a8985b5261f8c9e2ec2623',
//       taskId: 4,
//       text: 'Старое',
//     },
//     {
//       authorId: '63aac06a99db5a97f8847357',
//       taskId: 4,
//       text: 'Старое',
//     },
//     {
//       authorId: '63a898135261f8c9e2ec261d',
//       taskId: 4,
//       text: 'Старое',
//     },
//     {
//       authorId: '63a898135261f8c9e2ec261d',
//       taskId: 5,
//       text: 'Старое',
//     },
//     {
//       authorId: '63a8985b5261f8c9e2ec2623',
//       taskId: 5,
//       text: 'Старое',
//     },
//     {
//       authorId: '63aac06a99db5a97f8847357',
//       taskId: 5,
//       text: 'Старое',
//     },
//   ]
// await Promise.all(
//   comments.map(async (comment) => {
//     await prisma.comment.create({
//       data: comment,
//     })
//   })
// );
