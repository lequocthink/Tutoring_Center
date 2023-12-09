import { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';

const prisma = new PrismaClient();

export async function GET(
    req: NextApiRequest, res: NextApiResponse
) {
        const staff = await prisma.user.findMany({
            where: {
                role: "staff"
            },
            orderBy: {
                createdAt:'desc'
            },
        });

        const safeUsers = staff.map((user) => ({
                        ...user,
                        createdAt:user.createdAt.toISOString(),
                        updatedAt:user.createdAt.toISOString(),
                    }))

    return NextResponse.json(staff)


}