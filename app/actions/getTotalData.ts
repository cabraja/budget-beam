import prisma from '@/lib/prismadb'
import { auth } from '@clerk/nextjs';
import { redirect } from 'next/navigation'
import { startOfMonth,endOfMonth } from 'date-fns';

export interface IDashboardParams{
    from?:string;
    to?:string;
}

export interface ITotalData{
    expense:number | null;
    income: number | null;
}

export default async function getTotalData(params:IDashboardParams){
    try {
        const {userId} = auth();
        
        if(!userId){
            redirect('/sign-in');
        }

        let from,to;   
        if(Object.keys(params).length < 2){             
            from = startOfMonth(new Date());
            to = endOfMonth(new Date())
            
        }else if(params.from && params.to){
            from = new Date(params.from);
            to = new Date(params.to);    
        }        
        
        const exp = await prisma.expense.aggregate({
            _sum:{
                amount:true
            },
            where:{
                userId:userId,
                date:{
                    gte:from,
                    lte:to
                }
            }
        })

        const inc = await prisma.income.aggregate({
            _sum:{
                amount:true
            },
            where:{
                userId:userId,
                date:{
                    gte:from,
                    lte:to
                }
            }
        })

        
        return {expense:exp._sum.amount, income:inc._sum.amount};

    } catch (error) {
        
    }
}