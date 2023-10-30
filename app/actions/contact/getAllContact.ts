import prisma from '../../lib/prismadb'


export default async function getAllContact() {
    try {

        const contact = await prisma.contact.findMany({
            orderBy: {
                createdAt:'desc'
            }
        });

        const safeContact = contact.map((contact) => ({
            ...contact,
            createdAt:contact.createdAt.toISOString(),
            updatedAt:contact.createdAt.toISOString(),
        }))

        return safeContact;

    }catch(error:any) {
        throw new Error(error)
    }
}