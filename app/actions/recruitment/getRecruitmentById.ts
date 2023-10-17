import prisma from '../../lib/prismadb'

interface IParams {
    recruitmentId?:string
}

export default async function getRecruitmentById(
    params:IParams
) {
    try {

        const {recruitmentId} = params

        const recruitment = await prisma.recruitment.findUnique({
            where: {
                id:recruitmentId
            },
            // include: {
            //     user:true
            // }
        });

        if(!recruitmentId) {
            return null
        }


        return {
            ...recruitment,
            createdAt:recruitment?.createdAt.toString(),
            // user: {
            //     ...news?.user,
            //     createdAt: news?.user.createdAt.toString(),
            //     updatedAt: news?.user.updatedAt.toString(),
            // }
        }
        
    }catch(error:any) {
        throw new Error(error);

    }
}