'use client'
import React from 'react'
import { useCallback,useState } from 'react'
import { DataTableRowProps } from './DataTableRow'
import { Card } from '@/components/ui/card'
import { format } from 'date-fns'
import { Button } from '@/components/ui/button'
import axios from 'axios'
import toast from 'react-hot-toast'
import { useRouter } from 'next/navigation'

function DataTableCard({type,data}:DataTableRowProps) {

    const router = useRouter()
    const [disabled, setDisabled] = useState(false)

    const deleteRow = () => {
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
    }

  return (
    <Card className='px-2 py-2 font-bold flex flex-row items-center justify-between'>
        <div>
            <p className='text-sm'>{data.tag.label}</p>
            <small className='font-light text-xs text-secondary-foreground'>{format(data.date, "PPP")}</small>
        </div>

        <div className='flex flex-col items-center'>
            <p className='text-lg mb-2'>${data.amount}</p>
            <Button disabled={disabled} variant="outline" className='text-destructive' onClick={() => deleteRow()}>Delete</Button>
        </div>
    </Card>
  )
}

export default DataTableCard