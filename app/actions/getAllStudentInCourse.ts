import prisma from '../lib/prismadb';
import myUser from './getUser';


export default async function getAllStudentInCourse(courseId: any) {
    try {
        // const currentUser = await myUser();
        // if(!currentUser) {
        //     return []
        // }

        const student = await prisma.user.findMany({
            where: {
                basketIds: {
                    has: courseId
                }
            }
        });

        const safeBaskets = student.map((student) => ({
            ...student,
            createdAt:student.createdAt.toISOString()
        }))
        return safeBaskets
    }catch(error:any) {
        throw new Error(error)
    }
}