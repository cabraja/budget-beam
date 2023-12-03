'use client'
import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import { OverviewGraphData } from '@/app/types/graphs';

ChartJS.register(ArcElement, Tooltip, Legend);
import { Card,CardHeader,CardTitle } from '@/components/ui/card';
import { Rates } from '@/app/actions/getRates';
import { useCurrencyStore } from '@/app/hooks/useCurrency';
import {formatCurrency} from '@/lib/formatCurrency';

function OverviewPieChart({data,rates}:{data:OverviewGraphData,rates:Rates}) {

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
            <CardTitle>Income by tag</CardTitle>
        </CardHeader>
        {
            data && data.labels.length ?
            (<div className='w-full px-4'>
                <Pie data={data}/>
            </div>):
           (
            <div className='w-full px-4 h-[80%] flex items-center justify-center'>
                <div className='flex flex-col items-center'>
                    <p className='font-bold'>No income this month.</p>
                    <p className='font-light text-secondary-foreground text-center'>Start adding income in the income tab.</p>
                </div>
            </div>
           )
        }
    </Card>
      );
}

export default OverviewPieChart