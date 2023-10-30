import { NextResponse } from 'next/server';
import prisma from '../../lib/prismadb';


export async function POST(
    request: Request
) {
    const body = await request.json();


    const {
        name,
        email,
        message
    } = body

    const user = await prisma.contact.create({
        data: {
            name,
            email,
            message
        }
    })

    return NextResponse.json(user)
}