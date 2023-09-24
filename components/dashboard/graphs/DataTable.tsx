import React from 'react'
import {
    Table,
    TableBody,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import DataTableRow from './DataTableRow';
import { ScrollArea } from "@/components/ui/scroll-area"


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
   <ScrollArea className='h-[50vh] w-full'>
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
   </ScrollArea>
  )
}

export default DataTable