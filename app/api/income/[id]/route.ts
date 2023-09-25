import { NextResponse } from 'next/server';
import { auth } from '@clerk/nextjs';
import prisma from '@/lib/prismadb'

export async function DELETE(request:Request,{params}:{params:{id:string}}){
    try {
        const {userId} = auth();
  
        if(!userId){
        return new Response("Unauthorized", { status: 401 });
        }

        const deleteIncome = await prisma.income.delete({
            where: {
            id:+params.id
            },
        })
    
        return NextResponse.json(deleteIncome,{ status: 200 });
    } catch (error) {
        return NextResponse.json(error,{ status: 500 });
    }
  }