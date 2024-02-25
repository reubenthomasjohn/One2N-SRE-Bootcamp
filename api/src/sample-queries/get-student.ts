import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

async function main() {
const student = await prisma.student.findUnique({
        where: {
            id: 1,
        },
    });
    console.log(student);
}

main()
    .then(async () => {
        console.log("done with the get student by id query");
        await prisma.$disconnect()
    })
    .catch(async (e) => {
        console.error(e)
        await prisma.$disconnect()
        process.exit(1)
    })