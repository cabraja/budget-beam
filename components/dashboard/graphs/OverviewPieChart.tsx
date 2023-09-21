'use client'
import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import { OverviewGraphData } from '@/app/types/graphs';

ChartJS.register(ArcElement, Tooltip, Legend);
import { Card,CardHeader,CardTitle } from '@/components/ui/card';

function OverviewPieChart({data}:{data:OverviewGraphData}) {
    return (
    <Card className='w-full'>
        <CardHeader>
            <CardTitle>Income by tag</CardTitle>
        </CardHeader>
        <div className='w-full'>
            <Pie data={data}/>
        </div>
    </Card>
      );
}

export default OverviewPieChart