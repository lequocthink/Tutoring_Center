import { NextResponse } from 'next/server'

import prisma from '../../../lib/prismadb'

interface IParams {
    recruitmentId?:string
}


export async function PUT( 
    request: Request, 
    {params}:{params:IParams}    
) {
    const {recruitmentId} = params

    const json = await request.json()
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
    } = json

    const updated = await prisma.recruitment.update({
        where: {
            id: recruitmentId,
        },
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

    return NextResponse.json(updated)

}

export async function DELETE(
    request:Request, {
        params
    }: {params:IParams}
) {
    const {recruitmentId} = params


    if(!recruitmentId || typeof recruitmentId !== 'string') {
        throw new Error('Invalid Id')
    }

    const course = await prisma.recruitment.deleteMany({
        where: {
            id:recruitmentId
        }
    });

    return NextResponse.json(course)
}