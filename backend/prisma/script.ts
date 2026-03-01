import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

async function main() {
    // Prisma Client queries go here
    // ex. create User record
    const user = await prisma.user.create({
        data: {
            id: 1,
            email: 'masonyou@umich.edu',
            name: 'Mason'
        },
    })
    console.log(user)
}

main()
    .then(async () => {
        await prisma.$disconnect()
    })
    .catch(async (e) => {
        console.error(e)
        await prisma.$disconnect()
        process.exit(1)
    })