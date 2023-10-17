import { NextResponse } from 'next/server'
import prisma from '../../lib/prismadb'

export async function POST (request:Request) {

    const body = await request.json();

    const {
        title,
        deadline,
        salary,
        probationary,
        position,
        quantity,
        workingForm,
        degree,
        experience,
        description,
        required,
        benefit,
        location
    } = body

    const course = await prisma.recruitment.create({
        data: {
            title,
            deadline,
            salary,
            probationary,
            position,
            quantity,
            workingForm,
            degree,
            experience,
            description,
            required,
            benefit,
            location
        }
    })

    return NextResponse.json(course)

}

