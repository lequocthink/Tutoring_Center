import prisma from '../../lib/prismadb'

interface IParams {
    contactId?:string
}

export default async function getContactById(
    params:IParams
) {
    try {

        const {contactId} = params

        const contact = await prisma.contact.findUnique({
            where: {
                id:contactId
            },
            // include: {
            //     user:true
            // }
        });

        if(!contactId) {
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