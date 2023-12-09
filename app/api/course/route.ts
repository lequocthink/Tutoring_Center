import { NextResponse } from 'next/server'
import prisma from '../../lib/prismadb'
import myUser from '@/app/actions/getUser'

export async function POST (request:Request) {
    const currentUser = await myUser();

    if(!currentUser) {
        return console.log('No permission, no user registered');
    } 

    const body = await request.json();

    const {
        name,
        imageSrc,
        description,
        price,
        scheduleId,
        location,
        teacherId,
    } = body

    const course = await prisma.course.create({
        data: {
            name,
            imageSrc,
            description,
            price,
            scheduleId,
            location,
            teacherId
        }
    })

    return NextResponse.json(course)

}