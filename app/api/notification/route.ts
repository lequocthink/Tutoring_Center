import { NextResponse } from 'next/server'
import prisma from '../../lib/prismadb'
import myUser from '@/app/actions/getUser'

import getNewsById from '@/app/actions/getNewsById';

export async function POST (request:Request) {

    
    const body = await request.json();

    const {
        courseId,
        teacherName,
        message,
    } = body

    const course = await prisma.notification.create({
        data: {
            courseId,
            teacherName,
            message,
        }
    })

    return NextResponse.json(course)

}

