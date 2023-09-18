import prisma from '@/lib/prismadb'
import { auth } from '@clerk/nextjs';

export default async function getExpense(){
    try {
        const { userId } = auth();

        const tags = await prisma.expenseTag.findMany({
            where:{
                OR: [
                    {
                      userId: null, 
                    },
                    {
                      userId: userId,
                    },
                  ],
            }
        })

        return tags.map(tag =>({
            label:tag.label,
            value:tag.id
        }));
    } catch (error:any) {
        throw new Error(error)
    }
}