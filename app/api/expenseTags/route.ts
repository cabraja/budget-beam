import { NextResponse } from 'next/server';
import { auth } from '@clerk/nextjs';
import prisma from '@/lib/prismadb'
 
export async function POST(request:Request) {
  const {userId} = auth();
 
  if(!userId){
    return new Response("Unauthorized", { status: 401 });
  }
  
  const {label,color} = await request.json(); 

  const tag = await prisma.expenseTag.create({
   data:{
    label:label,
    color:color,
    userId:userId
   }
  })

  return NextResponse.json(tag,{ status: 201 });
}
