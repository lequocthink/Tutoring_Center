import { NextResponse } from 'next/server'

import prisma from '../../../lib/prismadb'

interface IParams {
    notificationId?:string
}

export async function DELETE(
    request:Request, {
        params
    }: {params:IParams}
) {
    const {notificationId} = params


    if(!notificationId || typeof notificationId !== 'string') {
        throw new Error('Invalid Id')
    }

    const course = await prisma.notification.deleteMany({
        where: {
            id:notificationId
        }
    });

    return NextResponse.json(course)
}