import prisma from '../lib/prismadb'

interface IParams {
    newsId?:string
}

export default async function getNewsById(
    params:IParams
) {
    try {

        const {newsId} = params

        const news = await prisma.news.findUnique({
            where: {
                id:newsId
            },
            // include: {
            //     user:true
            // }
        });

        if(!newsId) {
            return null
        }


        return {
            ...news,
            createdAt:news?.createdAt.toString(),
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