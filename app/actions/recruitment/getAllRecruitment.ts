import prisma from '../../lib/prismadb'


export default async function getAllRecruitment() {
    try {

        const recruitment = await prisma.recruitment.findMany({
            orderBy: {
                createdAt:'desc'
            }
        });

        const safeRecruitment = recruitment.map((recruitment) => ({
            ...recruitment,
            createdAt:recruitment.createdAt.toISOString(),
            updatedAt:recruitment.createdAt.toISOString(),
        }))

        return safeRecruitment;

    }catch(error:any) {
        throw new Error(error)
    }
}