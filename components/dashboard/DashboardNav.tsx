'use client'
import { useState } from "react"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Separator from '../ui/custom/Separator'
import { useRouter,usePathname,useSearchParams } from 'next/navigation'
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
  const searchParams = useSearchParams()

  // @ts-ignore
  const [dateRange, setDateRange] = useState({
     // @ts-ignore
    from: searchParams.get('from') ? new Date(searchParams.get('from')): startOfMonth(new Date()),
     // @ts-ignore
    to:searchParams.get('to') ? new Date(searchParams.get('to')): endOfMonth(new Date())
  })

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

    const refresh = searchParams.get('refresh');

    const query:any = {
      from:fromDate,
      to:toDate,
      refresh: refresh ? +refresh + 1 : 0
    } 
  
    const url = qs.stringifyUrl({
      url: pathname,
      query: query
    },{
        skipNull:true
    })
    router.push(url);
  }

  const generateUrl = (basePath:string):string => {
    const fromDate = searchParams.get('from');
    const toDate = searchParams.get('to');
    const refresh = searchParams.get('refresh');

    if(!fromDate || !toDate){
      const query:any = {
        refresh: refresh ?  +refresh + 1 : 0
      } 

      const url = qs.stringifyUrl({
        url: basePath,
        query: query
      },{
          skipNull:true
      })
      return url;
    }

    const query:any = {
      from:fromDate,
      to:toDate,
      refresh: refresh ?  +refresh + 1 : 0
    } 

    const url = qs.stringifyUrl({
      url: basePath,
      query: query
    },{
        skipNull:true
    })

    return url;
  }

  return (
    <div>
        <h1 className='text-4xl font-extrabold'>Dashboard</h1>
        <Separator num={2}/>
        <div className="flex lg:flex-row flex-col items-center justify-between">
          <Tabs defaultValue={pathname} className="lg:w-fit w-full">
              <TabsList className="w-full justify-between lg:flex grid grid-cols-2 grid-rows-2 gap-y-2 h-fit">
                  <TabsTrigger className="text-[0.7rem] lg:text-sm" value="/dashboard/overview" onClick={() => router.push(generateUrl('/dashboard/overview'))}>Overview</TabsTrigger>
                  <TabsTrigger className="text-[0.7rem] lg:text-sm" value="/dashboard/expenses" onClick={() => router.push(generateUrl('/dashboard/expenses'))}>Expenses</TabsTrigger>
                  <TabsTrigger className="text-[0.7rem] lg:text-sm" value="/dashboard/income" onClick={() => router.push(generateUrl('/dashboard/income'))}>Income</TabsTrigger>
                  <TabsTrigger className="text-[0.7rem] lg:text-sm" value="/dashboard/calendar" onClick={() => router.push(generateUrl('/dashboard/calendar'))}>Calendar</TabsTrigger>
              </TabsList>
          </Tabs>

          <div className="lg:flex hidden flex-row items-center gap-x-2">
            <DatePickerChanger onChange={event => changeDateRange(event)}/>
            <DatePickerWithRange date={dateRange}/>
            <CurrencySelect />
          </div>

          <div className="lg:hidden flex flex-col items-stretch gap-x-2 gap-y-2 mt-3 w-full">
            <div className="flex flex-row justify-between items-center">
              <DatePickerChanger onChange={event => changeDateRange(event)}/>
              <CurrencySelect />
            </div>
            <DatePickerWithRange date={dateRange}/>
          </div>
        </div>

    </div>
  )
}

export default DashboardNav