import prisma from '@/lib/prismadb'
import { auth } from '@clerk/nextjs';
import { redirect } from 'next/navigation'
import { startOfMonth,endOfMonth } from 'date-fns';
import { OverviewGraphData } from '../types/graphs';
import { IncomeTag } from '@prisma/client';

export interface IDashboardParams{
    from?:string;
    to?:string;
    refresh?:number;
}

export default async function getGroupedIncome(params:IDashboardParams){
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
        
        const income = await prisma.income.groupBy({
            by:'incomeTagId',
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
                incomeTagId: 'asc'
            }
        })

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

        let result:OverviewGraphData = {
            labels: [],
            datasets:[{
                label: "Amount",
                data:[],
                backgroundColor:[],
                borderWidth:0
            }]
        };

        income.forEach(inc => {
            let tagObj:IncomeTag;
            let tagName:string = 'Uknown';
            tags.forEach(tag => {
                if(tag.id === inc.incomeTagId){
                    tagName = tag.label;
                    tagObj = tag;

                    result.labels.push(tagName);
                    result.datasets[0].data.push(inc._sum.amount || 0);
                    result.datasets[0].backgroundColor.push(tagObj?.color || "#000")
                }
            })
        })
        
        return result;

    } catch (error) {
        
    }
}