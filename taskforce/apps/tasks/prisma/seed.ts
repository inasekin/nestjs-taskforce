import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function fillDb() {
  await prisma.category.upsert({
    where: { id: 1 },
    update: {},
    create: {
      title: 'Уборка',
      tasks: {
        create: [
          {
            title: 'Убраться в квартире после сабантуя',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas varius tortor nibh, sit amet tempor nibh finibus et. Aenean eu enim justo. Vestibulum aliquam hendrerit molestie. Mauris malesuada nisi sit amet augue accumsan tincidunt.',
            clientId: '13',
            status: 'Новое',
            city: 'Москва',
            address: 'ул. Добронравова, д. 7',
            budget: 5000,
            tags: {
              connectOrCreate: [
                {
                  create: {title: 'ванная'},
                  where: {title: 'ванная'},
                },
                {
                  create: {title: 'кухня'},
                  where: {title: 'кухня'},
                }
              ]
            },
            imagePath: '',
          },
        ]
      },
    }
  });
  await prisma.category.upsert({
    where: { id: 2 },
    update: {},
    create: {
      title: 'Огород',
      tasks: {
        create: [
          {
            title: 'Вскопать поле под картофель',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas varius tortor nibh, sit amet tempor nibh finibus et. Aenean eu enim justo. Vestibulum aliquam hendrerit molestie. Mauris malesuada nisi sit amet augue accumsan tincidunt.',
            clientId: '13',
            status: 'Новое',
            city: 'Владивосток',
            address: 'ул. Годунова, д. 3',
            budget: 1000,
            tags: {
              connectOrCreate: [
                {
                  create: {title: 'лопата'},
                  where: {title: 'лопата'},
                },
                {
                  create: {title: 'земля'},
                  where: {title: 'земля'},
                }
              ]
            },
            imagePath: '',
          },
          {
            title: 'Прополоть грядки с морковью',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas varius tortor nibh, sit amet tempor nibh finibus et. Aenean eu enim justo. Vestibulum aliquam hendrerit molestie. Mauris malesuada nisi sit amet augue accumsan tincidunt.',
            clientId: '13',
            status: 'Новое',
            dueDate:  new Date('2023-04-23'),
            city: 'Санкт-Петербург',
            address: 'ул. Серебрянникова, д. 24',
            budget: 1500,
            tags: {
              connectOrCreate: [
                {
                  create: {title: 'ботва'},
                  where: {title: 'ботва'},
                },
                {
                  create: {title: 'земля'},
                  where: {title: 'земля'},
                }
              ]
            },
            imagePath: '',
          },
        ]
      },
    }
  });
  console.info('Database was filled')
}

fillDb()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (err) => {
    console.error(err);
    await prisma.$disconnect()

    process.exit(1);
  })
