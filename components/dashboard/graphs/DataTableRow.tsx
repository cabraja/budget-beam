'use client'
import React from 'react'
import { useCallback,useState } from 'react'
import {format} from 'date-fns'
import {BsFillTrashFill} from 'react-icons/bs'
import axios from 'axios'
import toast from 'react-hot-toast'
import {
    TableCell,
    TableRow,
} from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { useRouter } from 'next/navigation'
import { Rates } from '@/app/actions/getRates'
import { useCurrencyStore } from '@/app/hooks/useCurrency'
import { formatCurrency } from '@/lib/formatCurrency'


export interface DataTableRowProps{
    type:string;
    rates:Rates;
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
        expenseTagId?: number | undefined;
        incomeTagId?: number | undefined;
    }
}


function DataTableRow({type,rates,data}:DataTableRowProps) {
    const router = useRouter()
    const [disabled, setDisabled] = useState(false)
    const {currency} = useCurrencyStore();

    const deleteRow = useCallback(() => {
        setDisabled(true);
        axios.delete(`/api/${type}/${data.id}`)
        .then(res => {
            toast.success('Deleted');
            router.refresh();
        })
        .catch(err => {
            toast.error('Error occured, try again later')
        })
        .finally(() => setDisabled(false))
    },[data.id])

  return (
    <TableRow>
        <TableCell className="font-medium">{data.tag.label}</TableCell>
        <TableCell>{format(data.date, "PP")}</TableCell>
        <TableCell className="text-right">{currency.isLeft && currency.label}{formatCurrency(data.amount, currency.name, rates)}{!currency.isLeft && currency.label}</TableCell>
        <TableCell className='w-0'>
            <Button disabled={disabled} onClick={() => deleteRow()} className='bg-destructive hover:bg-destructive hover:opacity-70 transition'>
                <BsFillTrashFill size={16}/>
            </Button>
        </TableCell>
    </TableRow>
  )
}

export default DataTableRow