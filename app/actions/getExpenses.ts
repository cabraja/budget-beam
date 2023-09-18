import prisma from '@/lib/prismadb'
import { auth } from '@clerk/nextjs';
import { redirect } from 'next/navigation'
import { startOfMonth,endOfMonth } from 'date-fns';

export interface IDashboardParams{
    from?:string;
    to?:string;
}

export default async function getExpenses(params:IDashboardParams){
    try {
        const {userId} = auth();
        
        if(!userId){
            redirect('/sign-in');
        }

        let from,to;   
        if(Object.keys(params).length === 0){             
            from = startOfMonth(new Date());
            to = endOfMonth(new Date())
            
        }else if(params.from && params.to){
            from = new Date(params.from);
            to = new Date(params.to);    
        }        
        
        const expenses = await prisma.expense.findMany({
            where:{
                userId:userId,
                date:{
                    gte:from,
                    lte:to
                }
            }
        })
        

        return expenses;

    } catch (error) {
        
    }
}