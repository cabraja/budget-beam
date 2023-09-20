import prisma from '@/lib/prismadb'
import { auth } from '@clerk/nextjs';
import { redirect } from 'next/navigation'
import { startOfMonth,endOfMonth } from 'date-fns';
import { OverviewGraphBar } from '@/components/dashboard/graphs/OverviewGraph';

export interface IDashboardParams{
    from?:string;
    to?:string;
    refresh?:number;
}

export default async function getGroupedExpenses(params:IDashboardParams){
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
        
        const expenses = await prisma.expense.groupBy({
            by:'expenseTagId',
            where:{
                userId:userId,
                date:{
                    gte:from,
                    lte:to
                }
            },
            _sum:{
                amount:true
            },
            orderBy:{
                expenseTagId: 'asc'
            }
        })

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

        const result:OverviewGraphBar[] = expenses.map(exp => {
            let tagName:string = "Uknown";

            tags.forEach(tag => {
                if(tag.id === exp.expenseTagId) tagName = tag.label;
            })

            return {sum: exp._sum.amount || 0, tag:tagName}
        })
        
        return result;

    } catch (error) {
        
    }
}