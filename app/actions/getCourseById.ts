import prisma from '../lib/prismadb'

interface IParams {
    courseId?:string
}

export default async function getCourseById(
    params:IParams
) {
    try {

        const {courseId} = params

        const course = await prisma.course.findUnique({
            where: {
                id:courseId
            }
        });

        if(!courseId) {
            return null
        }


        return {
            ...course,
            createdAt:course?.createdAt.toString(),
        }
        
    }catch(error:any) {
        throw new Error(error);

    }
}