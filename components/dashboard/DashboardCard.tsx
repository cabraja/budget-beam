import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import DashboardCardAmount from './DashboardCardAmount';
import { Rates } from "@/app/actions/getRates";

interface DashboardCardProps{
  amount:number;
  title:string;
  changeColor?:boolean;
  rates:Rates;
}

function DashboardCard({amount,title,changeColor,rates}:DashboardCardProps) {  
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent className=
      {changeColor ?
        amount < 0 ? 'text-destructive': 'text-positive'
        :''
      }>
        <DashboardCardAmount rates={rates} amount={amount}/>
      </CardContent>
    </Card>
  )
}

export default DashboardCard