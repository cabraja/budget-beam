'use client'
import React from 'react'
import { PieChart, Pie, LabelList, ResponsiveContainer } from 'recharts';
import { Card,CardHeader,CardTitle } from '@/components/ui/card';

const data = [
  { name: 'Group A', value: 400 },
  { name: 'Group B', value: 300 },
  { name: 'Group C', value: 300 },
  { name: 'Group D', value: 200 },
  { name: 'Group E', value: 278 },
  { name: 'Group F', value: 189 },
];

function OverviewPieChart() {
    return (

    <Card className='w-full px-5'>
        <CardHeader>
            <CardTitle>Expenses by tag</CardTitle>
        </CardHeader>
    <div className='w-full h-[300px]'>
        <ResponsiveContainer width="100%" height="100%">
            <PieChart width={400} height={400}>
            <Pie
                dataKey="value"
                data={data}
                cx="50%"
                cy="50%"
                outerRadius={80}
                fill="#b4e260"
            >
            <LabelList dataKey="name" position="outside" className='font-thin text-black dark:text-white' />
            </Pie>
            </PieChart>
        </ResponsiveContainer>
    </div>
    </Card>
      );
}

export default OverviewPieChart