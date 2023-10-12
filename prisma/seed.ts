/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

async function main() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const Lily = await prisma.user.upsert({
    where: { email: 'Lily@prisma.io' },
    update: {},
    create: {
      email: 'Lily@prisma.io',
      name: 'Lily Morrow',
    },
    
  });
  // const coffee = await prisma.coffee.upsert({
  //   where: { id: '1' },
  //   create: {
  //     id: '1',
  //     name: 'Latte',
  //     price:100.0,
  //   },
  //   update: {},
  // });
  const cardsData = [
    {
      id:'1',
      title: "Espresso",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      imageUrl: "espresso.jpeg",
      price: 90,
    },
    {id:'2',
      title: "Americano",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      imageUrl: "americano.jpeg",
      price: 90,
    },
    {
      id:'3',
      title: "Latte",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      imageUrl: "latte.jpeg",
      price: 90,
    },

    {
      id:'4',
      title: "Matcha",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      imageUrl: "matcha.jpeg",
      price: 120,
    },

    {
      id:'5',
      title: "Hot Chocolate",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      imageUrl: "chocolate.jpeg",
      price: 60,
    },

    {
      id:'6',
      title: "Mocha",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      imageUrl: "mocha.jpeg",
      price: 90,
    },
    {
      id:'7',
      title: "White Mocha",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      imageUrl: "mocha.jpeg",
      price: 200,
    },
    {
      id:'8',
      title: "Capo",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      imageUrl: "mocha.jpeg",
      price: 150,
    },
  ];

  // eslint-disable-next-line prefer-const
  for (let cardData of cardsData) {
    await prisma.coffee.upsert({
        where: { id: cardData.id },
        create: {
            id: cardData.id,
            name: cardData.title,
            price: cardData.price,
            description: cardData.description,
            imageUrl: cardData.imageUrl
        },
        update: {
            id: cardData.id,
            name: cardData.title,
            price: cardData.price,
            description:cardData.description,
            imageUrl: cardData.imageUrl
        },
    });
}
}


main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });