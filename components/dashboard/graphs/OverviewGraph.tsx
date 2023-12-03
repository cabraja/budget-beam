'use client'
import React, { useEffect } from 'react'
import { Card,CardHeader,CardTitle } from '@/components/ui/card';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { OverviewGraphData } from '@/app/types/graphs';
import { Rates } from '@/app/actions/getRates';
import { useCurrencyStore } from '@/app/hooks/useCurrency';
import {formatCurrency} from '@/lib/formatCurrency';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const,
    },
    title: {
      display: false,
    },
  },
};


function OverviewGraph({data,rates}:{data:OverviewGraphData,rates:Rates}) {

  const {currency} = useCurrencyStore();

 const newData = data.datasets[0].data.map(x => formatCurrency(x,currency.name,rates));

 data = {
   ...data,
   datasets:[
    {
      ...data.datasets[0],
      data: newData
    }
   ]
 }

  return (
    <Card className='w-full h-full'>
        <CardHeader>
        <CardTitle>Expenses by tag</CardTitle>
      </CardHeader>

      <div className='w-full lg:px-5 px-2'>
      <Bar options={options} data={data} />
      </div>
    </Card>
  )
}

export default OverviewGraph