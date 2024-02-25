import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

async function main() {
    // ...write Prisma Client queries here 
    const students = await prisma.student.findMany({});
    console.log(students);
};

main()
    .then(async () => {
        console.log("done with the get students query");
        await prisma.$disconnect()
    })
    .catch(async (e) => {
        console.error(e)
        await prisma.$disconnect()
        process.exit(1)
    })