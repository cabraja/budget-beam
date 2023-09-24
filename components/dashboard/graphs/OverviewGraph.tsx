'use client'
import React from 'react'
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


function OverviewGraph({data}:{data:OverviewGraphData}) {
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