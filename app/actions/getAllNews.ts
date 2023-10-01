import prisma from '../lib/prismadb'


export default async function getAllNews() {
    try {

        // const {result} = params

        // let query: any = {};

        // if(result) {
        //     query.name = {
        //         contains:result
        //     }
        // }

        const news = await prisma.news.findMany({
            orderBy: {
                createdAt:'desc'
            }
        });

        const safeNews = news.map((news) => ({
            ...news,
            createdAt:news.createdAt.toISOString(),
        }))

        return safeNews;

    }catch(error:any) {
        throw new Error(error)
    }
}