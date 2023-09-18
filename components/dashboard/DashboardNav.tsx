'use client'
import { useState } from "react"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Separator from '../ui/custom/Separator'
import { useRouter,usePathname } from 'next/navigation'
import DatePickerWithRange from "./DatePickerWithRange"
import CurrencySelect from "../ui/custom/CurrencySelect"
import DatePickerChanger from "./DatePickerChanger"
import {startOfMonth,endOfMonth,subMonths,addMonths} from 'date-fns'
import qs from "query-string"

enum DateChange{
  ADD = 1,
  SUBTRACT = -1
}

function DashboardNav() {
  const pathname = usePathname()
  const router = useRouter()

  const [dateRange, setDateRange] = useState({from: startOfMonth(new Date()), to:endOfMonth(new Date())})

  const changeDateRange = (option:DateChange) => {
    let fromDate,toDate;
    if(option === DateChange.ADD){
        fromDate = addMonths(dateRange.from,1)
        toDate = addMonths(dateRange.to,1)
    }else{
      fromDate = subMonths(dateRange.from,1)
      toDate = subMonths(dateRange.to,1)
    }
    
    setDateRange({from:fromDate, to:toDate});

    const query:any = {
      from:fromDate,
      to:toDate
    } 
  
    const url = qs.stringifyUrl({
      url: '/dashboard/overview',
      query: query
    },{
        skipNull:true
    })
    router.push(url);
  }

  return (
    <div>
        <h1 className='text-4xl font-extrabold'>Dashboard</h1>
        <Separator num={2}/>
        <div className="flex flex-row items-center justify-between">
          <Tabs defaultValue={pathname} className="w-fit">
              <TabsList>
                  <TabsTrigger value="/dashboard/overview" onClick={() => router.push('/dashboard/overview')}>Overview</TabsTrigger>
                  <TabsTrigger value="/dashboard/expenses" onClick={() => router.push('/dashboard/expenses')}>Expenses</TabsTrigger>
                  <TabsTrigger value="/dashboard/calendar" onClick={() => router.push('/dashboard/calendar')}>Calendar</TabsTrigger>
              </TabsList>
          </Tabs>

          <div className="flex flex-row items-center gap-x-2">
            <DatePickerChanger onChange={event => changeDateRange(event)}/>
            <DatePickerWithRange date={dateRange}/>
            <CurrencySelect />
          </div>
        </div>

    </div>
  )
}

export default DashboardNav