import prisma from '../../lib/prismadb'

interface IParams {
    staffId?:string
}

export default async function getStaffById(
    params:IParams
) {
    try {

        const {staffId} = params

        const contact = await prisma.user.findUnique({
            where: {
                id:staffId
            },
        });

        if(!staffId) {
            return null
        }


        return {
            ...contact,
            createdAt:contact?.createdAt.toString(),
        }
        
    }catch(error:any) {
        throw new Error(error);

    }
}

