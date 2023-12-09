import { NextResponse } from "next/server";
import myUser from "@/app/actions/getUser";
import prisma from '../../../lib/prismadb';

interface IParams {
    courseId?:string
}
export async function DELETE(
    request:Request, {
        params
    }: {params:IParams}
) {
    // const currentUser = await myUser()


    // if(!currentUser) {
    //     return NextResponse.error()
    // }

    const {courseId} = params


    if(!courseId || typeof courseId !== 'string') {
        throw new Error('Invalid Id')
    }

    const course = await prisma.course.deleteMany({
        where: {
            id:courseId,
            // userId:currentUser.id
        }
    });

    return NextResponse.json(course)
}


export async function PUT( 
    request: Request, 
    {params}:{params:IParams}    
) {
    const {courseId} = params
    const json = await request.json()
    const {
        name,
        imageSrc,
        description,
        price,
        teacherId,
        studentId,
        // transcriptId,
        // scheduleId,
        location,
        updateTeacher
    } = json
    // const currentUser = await myUser()


    // if(!currentUser) {
    //     return NextResponse.error()
    // }

    if(!courseId || typeof courseId !== 'string') {
        throw new Error('Invalid Id')
    }

    let updated:any;


    if(updateTeacher === false){
        updated = await prisma.course.update({
            where: {
                id: courseId,
            },
            data: {
                name,
                imageSrc,
                description,
                price,
                studentId,
                // transcriptId,
                // scheduleId,
                location
            }
        })
    }
    else {


        updated = await prisma.course.update({
            where: {
                id: courseId,
            },
            data: {
                teacherId: teacherId
            }
        })
    }


    return NextResponse.json(updated)

}