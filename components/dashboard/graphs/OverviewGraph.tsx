'use client'

import React, { useRef,useEffect,useState } from 'react';
import {BarChart,Bar,XAxis,YAxis, ResponsiveContainer} from 'recharts'
import { Card,CardHeader,CardTitle } from '@/components/ui/card';

export interface OverviewGraphBar{
    sum:number;
    tag:string;
}

function OverviewGraph({data}:{data:OverviewGraphBar[]}) {
    // const ref = useRef(null);
    // const [width, seWidth] = useState(0);

    // const handleResize = () => {
    //     //@ts-ignore
    //     seWidth(ref?.current?.clientWidth)
    // }

    // useEffect(() => {
    //     handleResize();
    //     window.addEventListener('resize', handleResize)
    // },[])

  return (
    <Card className='w-full px-5'>
        <CardHeader>
        <CardTitle>Expenses by tag</CardTitle>
      </CardHeader>

      <ResponsiveContainer width="100%" height={350}>
        <BarChart  data={data}>
        <XAxis dataKey="tag" />
        <YAxis />
        <Bar dataKey="sum" fill="#b4e260" />
        </BarChart>
      </ResponsiveContainer>
    </Card>
  )
}

export default OverviewGraph