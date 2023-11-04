import prisma from '../../lib/prismadb'

interface IParams {
    studentId?:string
}

export default async function getStudentById(
    params:IParams
) {
    try {

        const {studentId} = params

        const contact = await prisma.user.findUnique({
            where: {
                id:studentId
            },
        });

        if(!studentId) {
            return null
        }


        return {
            ...contact,
            createdAt:contact?.createdAt.toString(),
        }
        
    }catch(error:any) {
        throw new Error(error);

    }
}