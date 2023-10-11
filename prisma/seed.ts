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