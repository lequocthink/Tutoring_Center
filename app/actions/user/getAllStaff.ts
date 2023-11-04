import prisma from '../../lib/prismadb'


export default async function getAllStaff() {
    try {

        const users = await prisma.user.findMany({
            where: {
                role: "staff"
            },
            orderBy: {
                createdAt:'desc'
            },
        });

        const safeUsers = users.map((user) => ({
            ...user,
            createdAt:user.createdAt.toISOString(),
            updatedAt:user.createdAt.toISOString(),
        }))

        return safeUsers;

    }catch(error:any) {
        throw new Error(error)
    }
}