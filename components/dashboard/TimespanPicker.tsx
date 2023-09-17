'use client'

import {useState} from 'react'
import { addMonths } from 'date-fns'
import { Switch } from "@/components/ui/switch"


function TimespanPicker() {
    const [monthlyMode, setMonthlyMode] = useState(true)

  return (
    <div>
        {
            monthlyMode ?
            <p>View by month</p>
            :
            <p>View by week</p>   
        }
        <Switch
            checked={monthlyMode}
            onCheckedChange={() => setMonthlyMode(!monthlyMode)}
            disabled
            aria-readonly
        />
    </div>
  )
}

export default TimespanPicker