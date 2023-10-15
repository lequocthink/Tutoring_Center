import { NextResponse } from 'next/server'
import prisma from '../../lib/prismadb'
import myUser from '@/app/actions/getUser'

import getNewsById from '@/app/actions/getNewsById';

export async function POST (request:Request) {
    // const currentUser = await myUser();

    // if(!currentUser) {
    //     return console.log('No permission, no user registered');
    // } 

    

    const body = await request.json();

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
    } = body

    const course = await prisma.news.create({
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

    return NextResponse.json(course)

}

