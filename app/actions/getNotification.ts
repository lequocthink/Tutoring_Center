import prisma from '../lib/prismadb'



export default async function getNotification(courseId: any) {
    try {

        const users = await prisma.notification.findMany({
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