import { Expense,ExpenseTag } from '@prisma/client'
import React from 'react'
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import DataTableRow from './DataTableRow';

interface DataTableProps{
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
    }[]
}

function DataTable({data}:DataTableProps) {
  return (
    <Table className='h-[inherit]'>
        <TableHeader>
                <TableRow>
                <TableHead className="w-[100px]">Tag</TableHead>
                <TableHead>Date</TableHead>
                <TableHead className="text-right">Amount</TableHead>
                <TableHead className='w-fit'></TableHead>
            </TableRow>
        </TableHeader>
        <TableBody>
            {
                data.map(row => (
                <DataTableRow data={row}/>
                ))
            }
        </TableBody>
    </Table>

  )
}

export default DataTable