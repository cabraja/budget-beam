'use client'

import React, { useRef,useEffect,useState } from 'react';
import {BarChart,Bar,XAxis,YAxis} from 'recharts'
import { Card,CardHeader,CardTitle } from '@/components/ui/card';

export interface OverviewGraphBar{
    sum:number;
    tag:string;
}

function OverviewGraph({data}:{data:OverviewGraphBar[]}) {
    const ref = useRef(null);
    const [width, seWidth] = useState(0);

    useEffect(() => {
        const handleResize = () => {
            //@ts-ignore
            seWidth(ref?.current?.clientWidth)
        }
        console.log('called');
        
        window.addEventListener('resize', handleResize)
    })

  return (
    <Card className='w-full' ref={ref}>
        <CardHeader>
        <CardTitle>Expenses by tag</CardTitle>
      </CardHeader>

        <BarChart width={width} height={300} data={data}>
        <XAxis dataKey="tag" />
        <YAxis />
        <Bar dataKey="sum" fill="#b4e260" />
        </BarChart>
    </Card>
  )
}

export default OverviewGraph