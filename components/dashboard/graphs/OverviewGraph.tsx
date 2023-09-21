'use client'

import React from 'react';
import {BarChart,Bar,XAxis,YAxis, ResponsiveContainer} from 'recharts'
import { Card,CardHeader,CardTitle } from '@/components/ui/card';

export interface OverviewGraphBar{
    sum:number;
    tag:string;
}

function OverviewGraph({data}:{data:OverviewGraphBar[]}) {
  return (
    <Card className='w-full'>
        <CardHeader>
        <CardTitle>Expenses by tag</CardTitle>
      </CardHeader>

      <div className='w-full px-5'>
        <ResponsiveContainer width="100%" height={350}>
          <BarChart  data={data}>
          <XAxis dataKey="tag" />
          <YAxis />
          <Bar dataKey="sum" fill="#b4e260" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </Card>
  )
}

export default OverviewGraph