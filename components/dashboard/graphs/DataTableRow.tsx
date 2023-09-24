'use client'
import React from 'react'
import {format} from 'date-fns'
import {BsFillTrashFill} from 'react-icons/bs'
import {
    TableCell,
    TableRow,
} from "@/components/ui/table"
import { Button } from "@/components/ui/button"


interface DataTableRowProps{
    data: {
        tag: {
            id: number;
            createdAt: Date;
            label: string;
            userId: string | null;
            color: string;
        };
    } & {
        id: number;
        createdAt: Date;
        amount: number;
        date: Date;
        userId: string;
        expenseTagId: number;
    }
}

function DataTableRow({data}:DataTableRowProps) {
  return (
    <TableRow>
        <TableCell className="font-medium">{data.tag.label}</TableCell>
        <TableCell>{format(data.date, "PP")}</TableCell>
        <TableCell className="text-right">${data.amount}</TableCell>
        <TableCell className='w-0'>
            <Button className='bg-destructive hover:bg-destructive hover:opacity-70 transition'>
                <BsFillTrashFill size={16}/>
            </Button>
        </TableCell>
    </TableRow>
  )
}

export default DataTableRow