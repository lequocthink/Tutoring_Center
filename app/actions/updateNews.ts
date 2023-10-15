import prisma from '../lib/prismadb'

interface IParams {
    newsId?:string
}

interface Dataparams {
    mainTitle: any,
    imageSrc: any,
    titleOne: any,
    titleTwo: any,
    titleThree: any,
    titleFour: any,
    contentOne: any,
    contentTwo: any,
    contentThree: any,
    contentFour: any
}

export default async function updateNews(
    data:Dataparams,
    params:IParams
) {
    try {

        const {newsId} = params

        const news = await prisma.news.update({
            where: {
              id: newsId,
            },
            data: {
                mainTitle: data.mainTitle,
                imageSrc: data.imageSrc,
                titleOne: data.titleOne,
                titleTwo: data.titleTwo,
                titleThree: data.titleThree,
                titleFour: data.titleFour,
                contentOne: data.contentOne,
                contentTwo: data.contentTwo,
                contentThree: data.contentThree,
                contentFour: data.contentFour
            },
          })

        return news;

        // if(!newsId) {
        //     return null
        // }


        // return {
        //     ...news,
        //     createdAt:news?.createdAt.toString(),
        //     // user: {
        //     //     ...news?.user,
        //     //     createdAt: news?.user.createdAt.toString(),
        //     //     updatedAt: news?.user.updatedAt.toString(),
        //     // }
        // }
        
    }catch(error:any) {
        throw new Error(error);

    }
}