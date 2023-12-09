import prisma from '../../lib/prismadb'


export default async function getTeacherById(id: string): Promise<any | null> {
    try {
      const schedule = await prisma.user.findUnique({
        where: {
          id: id,
        },
      });
  
      if (!schedule) {
        return null;
      }
  
      return {
        ...schedule,
        createdAt: schedule?.createdAt.toString(),
      };
    } catch (error: any) {
      throw new Error(error);
    }
  }