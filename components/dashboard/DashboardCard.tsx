import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import DashboardCardAmount from './DashboardCardAmount';

interface DashboardCardProps{
  amount:number;
  title:string;
  changeColor?:boolean;
}

function DashboardCard({amount,title,changeColor}:DashboardCardProps) {  
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
        <DashboardCardAmount amount={amount}/>
      </CardContent>
    </Card>
  )
}

export default DashboardCard