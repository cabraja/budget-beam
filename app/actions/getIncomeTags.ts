import prisma from '@/lib/prismadb'
import { auth } from '@clerk/nextjs';

export default async function getIncomeTags(){
    try {
        const { userId } = auth();

        const tags = await prisma.incomeTag.findMany({
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
            value:tag.id,
            color:tag.color
        }));
    } catch (error:any) {
        throw new Error(error)
    }
}