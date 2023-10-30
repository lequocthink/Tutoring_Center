import prisma from '../../lib/prismadb'

interface IParams {
    adminId?:string
}

export default async function getAdminById(
    params:IParams
) {
    try {

        const {adminId} = params

        const contact = await prisma.user.findUnique({
            where: {
                id:adminId
            },
        });

        if(!adminId) {
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