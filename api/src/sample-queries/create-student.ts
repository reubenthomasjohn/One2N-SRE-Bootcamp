import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient({log: ['info', 'query'],});

async function main() {
    await prisma.student.create({
        data: {
            firstName: "Sample first name",
            lastName: "Sample last name"
        }
    })
}

main()
    .then(async () => {
        console.log("done with the create student query");
        await prisma.$disconnect()
    })
    .catch(async (e) => {
        console.error(e)
        await prisma.$disconnect()
        process.exit(1)
    })