import { NextResponse } from 'next/server';
import { auth } from '@clerk/nextjs';
import prisma from '@/lib/prismadb'
 
export async function POST(request:Request) {
  const {userId} = auth();
 
  if(!userId){
    return new Response("Unauthorized", { status: 401 });
  }
  
  const {amount,date,tag} = await request.json(); 

  const income = await prisma.income.create({
    data:{
        amount:amount,
        date:date,
        userId:userId,
        incomeTagId:tag
    }
  })

  return NextResponse.json(income,{ status: 201 });
}