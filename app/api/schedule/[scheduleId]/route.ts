
import prisma from '../../../lib/prismadb'
import { NextResponse } from "next/server"

interface IParams {
    scheduleId?:string
}


export async function PUT( 
    request: Request, 
    {params}:{params:IParams}    
) {
    const {scheduleId} = params
    const json = await request.json()
    const {
        monday,
        tuesday,
        wednesday,
        thursday,
        friday,
        saturday,
        sunday,
    } = json

    const updated = await prisma.schedule.update({
        where: {
            id: scheduleId,
        },
        data: {
            monday,
            tuesday,
            wednesday,
            thursday,
            friday,
            saturday,
            sunday,
        }
    })

    return NextResponse.json(updated)
}


export async function DELETE(
    request:Request, {
        params
    }: {params:IParams}
) {
    const {scheduleId} = params


    if(!scheduleId || typeof scheduleId !== 'string') {
        throw new Error('Invalid Id')
    }

    const course = await prisma.schedule.deleteMany({
        where: {
            id:scheduleId
        }
    });

    return NextResponse.json(course)
}