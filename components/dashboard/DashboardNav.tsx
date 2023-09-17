'use client'

import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Separator from '../ui/custom/Separator'
import { useRouter,usePathname } from 'next/navigation'
import DatePickerWithRange from "./DatePickerWithRange"
import CurrencySelect from "../ui/custom/CurrencySelect"
import TimespanPicker from "./TimespanPicker"


function DashboardNav() {
  const pathname = usePathname()
  const router = useRouter()

  return (
    <div>
        <h1 className='text-4xl font-extrabold'>Dashboard</h1>
        <Separator num={2}/>
        <div className="flex flex-row items-center justify-between">
          <Tabs defaultValue={pathname} className="w-[400px]">
              <TabsList>
                  <TabsTrigger value="/dashboard/overview" onClick={() => router.push('/dashboard/overview')}>Overview</TabsTrigger>
                  <TabsTrigger value="/dashboard/expenses" onClick={() => router.push('/dashboard/expenses')}>Expenses</TabsTrigger>
                  <TabsTrigger value="/dashboard/calendar" onClick={() => router.push('/dashboard/calendar')}>Calendar</TabsTrigger>
              </TabsList>
          </Tabs>

          <div className="flex flex-row items-center gap-x-2">
            <TimespanPicker />
            <CurrencySelect />
          </div>
        </div>

    </div>
  )
}

export default DashboardNav