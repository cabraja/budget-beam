'use client'
import CountUp from 'react-countup'

interface DashboardCardAmountProps{
    amount:number;
  }

function DashboardCardAmount({amount}:DashboardCardAmountProps) {
  return (
    <p className='text-4xl font-bold'>$ <CountUp start={0} duration={1} end={amount}/></p>
  )
}

export default DashboardCardAmount