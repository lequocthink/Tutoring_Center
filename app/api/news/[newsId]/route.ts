import { NextResponse } from 'next/server'

import prisma from '../../../lib/prismadb'

interface IParams {
    newsId?:string
}


export async function PUT( 
    request: Request, 
    {params}:{params:IParams}    
) {
    const {newsId} = params

    const json = await request.json()
    const {
        mainTitle,
        titleOne,
        titleTwo,
        titleThree,
        titleFour,
        contentOne,
        contentTwo,
        contentThree,
        imageSrc,
        contentFour
    } = json
    // const currentUser = await myUser()


    // if(!currentUser) {
    //     return NextResponse.error()
    // }

    // if(!newsId || typeof newsId !== 'string') {
    //     throw new Error('Invalid Id')
    // }

    // const hashedPasswordupdated = await bcrypt.hash(password, 12);

    const updated = await prisma.news.update({
        where: {
            id: newsId,
        },
        data: {
            mainTitle,
        titleOne,
        titleTwo,
        titleThree,
        titleFour,
        contentOne,
        contentTwo,
        contentThree,
        imageSrc,
        contentFour
        }
    })

    return NextResponse.json(updated)

}

export async function DELETE(
    request:Request, {
        params
    }: {params:IParams}
) {
    const {newsId} = params


    if(!newsId || typeof newsId !== 'string') {
        throw new Error('Invalid Id')
    }

    const course = await prisma.news.deleteMany({
        where: {
            id:newsId
        }
    });

    return NextResponse.json(course)
}