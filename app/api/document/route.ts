import { NextResponse } from 'next/server'
import prisma from '../../lib/prismadb'

export async function POST (request:Request) {

    
    const body = await request.json();

    const {
        nameFile,
        urlFile,
        courseId,
    } = body

    const course = await prisma.document.create({
        data: {
            nameFile,
            urlFile,
            courseId,
        }
    })

    return NextResponse.json(course)

}

