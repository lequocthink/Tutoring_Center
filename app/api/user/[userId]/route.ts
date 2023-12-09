
import prisma from '../../../lib/prismadb'
import { NextResponse } from "next/server"
import bcrypt from 'bcrypt'
import myUser from '@/app/actions/getUser'

interface IParams {
    userId?:string
}


export async function PUT( 
    request: Request, 
    {params}:{params:IParams}    
) {
    const {userId} = params
    const json = await request.json()
    const {
        name,
        email,
        phone,
        address,
        gender,
        birth,
        hashedPassword,
        pass,
        avatar,
        status,
    } = json
    const currentUser = await myUser()


    if(!currentUser) {
        return NextResponse.error()
    }

    if(!userId || typeof userId !== 'string') {
        throw new Error('Invalid Id')
    }

    let updated:any;
    if(pass === false){
        updated = await prisma.user.update({
            where: {
                id: userId,
            },
            data: {
                name,
                email,
                phone,
                address,
                gender,
                birth,
                avatar,
                status,
                updatedAt: new Date()
            }
        })
    }
    else {

        const hashedPasswordupdated = await bcrypt.hash(hashedPassword, 12);

        updated = await prisma.user.update({
            where: {
                id: userId,
            },
            data: {
                hashedPassword: hashedPasswordupdated,
                updatedAt: new Date(),
            }
        })
    }

    return NextResponse.json(updated)
}


export async function DELETE(
    request:Request, {
        params
    }: {params:IParams}
) {
    const {userId} = params


    if(!userId || typeof userId !== 'string') {
        throw new Error('Invalid Id')
    }

    const course = await prisma.user.deleteMany({
        where: {
            id:userId
        }
    });

    return NextResponse.json(course)
}