import { NextResponse } from 'next/server'

import prisma from '../../../lib/prismadb'

interface IParams {
    documentId?:string
}

export async function DELETE(
    request:Request, {
        params
    }: {params:IParams}
) {
    const {documentId} = params


    if(!documentId || typeof documentId !== 'string') {
        throw new Error('Invalid Id')
    }

    const course = await prisma.document.deleteMany({
        where: {
            id:documentId
        }
    });

    return NextResponse.json(course)
}