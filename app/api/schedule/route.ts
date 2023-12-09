import { NextResponse } from 'next/server'
import { NextApiRequest, NextApiResponse } from 'next';
import prisma from '../../lib/prismadb'

export async function GET(
    // req: NextApiRequest, res: NextApiResponse
    request:Request
) {
    const body = await request.json();

    const {
        id
    } = body

    // const {staffId} = params

    // const { id } = req.query;

    const idString = Array.isArray(id) ? id[0] : id;

    const schedule = await prisma.user.findUnique({
        where: {
            id: idString
        },
    });
    return NextResponse.json(schedule)
}

export async function POST (request:Request) {

    const body = await request.json();

    const {
        monday,
        tuesday,
        wednesday,
        thursday,
        friday,
        saturday,
        sunday
    } = body

    const schedule = await prisma.schedule.create({
        data: {
            monday,
            tuesday,
            wednesday,
            thursday,
            friday,
            saturday,
            sunday
        }
    })

    return NextResponse.json(schedule)

}

