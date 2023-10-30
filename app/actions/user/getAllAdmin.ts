import prisma from '../../lib/prismadb'


export default async function getAllAdmin() {
    try {

        const users = await prisma.user.findMany({
            where: {
                role: "admin"
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