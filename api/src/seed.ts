import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function seed() {
  try {
    // Insert initial data into the Student table
    await prisma.$executeRaw`INSERT INTO "Student" ("firstName", "lastName") VALUES ('John', 'Doe')`;
    await prisma.$executeRaw`INSERT INTO "Student" ("firstName", "lastName") VALUES ('Jane', 'Smith')`;
    await prisma.$executeRaw`INSERT INTO "Student" ("firstName", "lastName") VALUES ('Reuben', 'Thomas')`;

    console.log('Seed data inserted successfully');
  } catch (error) {
    console.error('Error seeding database:', error);
  } finally {
    // Disconnect Prisma client
    await prisma.$disconnect();
  }
}

// Run the seed function
seed();