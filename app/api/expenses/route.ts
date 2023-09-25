import { NextResponse } from 'next/server';
import { auth } from '@clerk/nextjs';
import prisma from '@/lib/prismadb'
 
export async function POST(request:Request) {
  const {userId} = auth();
 
  if(!userId){
    return new Response("Unauthorized", { status: 401 });
  }
  
  const {amount,date,tag} = await request.json(); 

  const expense = await prisma.expense.create({
    data:{
        amount:amount,
        date:date,
        userId:userId,
        expenseTagId:tag
    }
  })

  return NextResponse.json(expense,{ status: 201 });
}
