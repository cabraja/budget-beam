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
import DataTableCard from './DataTableCard';
import { Rates } from '@/app/actions/getRates';


interface DataTableProps{
    type:string;
    rates:Rates;
    data: ({
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
        expenseTagId?: number;
        incomeTagId?:number;
    })[]
}

function DataTable({type,rates,data}:DataTableProps) {
  return (
   <>
    <ScrollArea className='lg:h-[50vh] h-full w-full lg:block hidden'>
    <Table className='h-[inherit]'>
        <TableHeader>
            <TableRow>
                <TableHead className=" lg:w-[100px]">Tag</TableHead>
                <TableHead>Date</TableHead>
                <TableHead className="text-right">Amount</TableHead>
                <TableHead className='w-fit'></TableHead>
            </TableRow>
        </TableHeader>
        <TableBody>
            {
                data.map(row => (
                <DataTableRow rates={rates} key={row.id} data={row} type={type}/>
                ))
            }
        </TableBody>
    </Table>
   </ScrollArea>

   <div className='flex lg:hidden flex-col items-stretch gap-y-3'>
        {
            data.map(row => (
            <DataTableCard rates={rates} key={row.id} data={row} type={type}/>
            ))
        }
   </div>
   
   </>
  )
}

export default DataTable