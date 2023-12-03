'use client'
import { Rates } from '@/app/actions/getRates';
import { CurrencyName, useCurrencyStore } from '@/app/hooks/useCurrency';
import {formatCurrency} from '@/lib/formatCurrency';
import CountUp from 'react-countup'

interface DashboardCardAmountProps{
    amount:number;
    rates:Rates;
  }

function DashboardCardAmount({amount,rates}:DashboardCardAmountProps) {
  const {currency} = useCurrencyStore()
  return (
    <p className='text-4xl font-bold'>{currency.isLeft && currency.label} <CountUp start={0} duration={1} end={formatCurrency(amount,currency.name,rates)}/>{!currency.isLeft && currency.label}</p>
  )
}

export default DashboardCardAmount