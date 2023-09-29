'use client'
import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import { OverviewGraphData } from '@/app/types/graphs';

ChartJS.register(ArcElement, Tooltip, Legend);
import { Card,CardHeader,CardTitle } from '@/components/ui/card';

function OverviewPieChart({data}:{data:OverviewGraphData}) {
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