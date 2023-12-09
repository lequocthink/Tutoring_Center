import prisma from '../../lib/prismadb'

// interface IParams {
//     scheduleId?:string
// }

// export default async function getScheduleById(
//     params:IParams
// ) {
//     try {

//         const {scheduleId} = params

//         const schedule = await prisma.schedule.findUnique({
//             where: {
//                 id:scheduleId
//             },
//             // include: {
//             //     user:true
//             // }
//         });

//         if(!scheduleId) {
//             return null
//         }


//         return {
//             ...schedule,
//             createdAt:schedule?.createdAt.toString(),
//         }
        
//     }catch(error:any) {
//         throw new Error(error);

//     }
// }


interface IParams {
    scheduleId: string;
  }
  
  export default async function getScheduleById(id: string): Promise<any | null> {
    try {
      const schedule = await prisma.schedule.findUnique({
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