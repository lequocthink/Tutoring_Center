import { NextResponse } from 'next/server';
import prisma from '../../lib/prismadb';
import bcrypt from 'bcrypt'


export async function POST(
    request: Request
) {
    const body = await request.json();


    const {
        name,
        email,
        password,
        role,
        gender,
        phone,
        address,
        birth,
    } = body

    const hashedPassword = await bcrypt.hash(password,12);


    const user = await prisma.user.create({
        data: {
            name,
            email,
            hashedPassword,
            role,
            gender,
            phone,
            address,
            birth,
        }
    })

    return NextResponse.json(user)
}