import prisma from '../lib/prismadb'



export default async function getAllDocument(courseId: any) {
    try {

        const users = await prisma.document.findMany({
            where: {
                courseId: courseId
            },
            orderBy: {
                createdAt:'desc'
            },
        });

        const safeUsers = users.map((user) => ({
            ...user,
            createdAt:user.createdAt.toISOString(),
            // updatedAt:user.createdAt.toISOString(),
        }))

        return safeUsers;

    }catch(error:any) {
        throw new Error(error)
    }
}