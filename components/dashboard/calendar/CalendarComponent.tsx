import { CardHeader, CardTitle } from "@/components/ui/card";
import CalendarDay from "./CalendarDay";
import { getDate,getDay,getDaysInMonth } from "date-fns";

export interface DataEntry{
  tag: {
    id: number;
    createdAt: Date;
    label: string;
    userId: string | null;
    color: string;
  };
  id: number;
  createdAt: Date;
  amount: number;
  date: Date;
  userId: string;
  expenseTagId?: number;
  incomeTagId?:number;
}

interface CalendarProps{
  startDate: Date | null;
  income:DataEntry[];
  expenses:DataEntry[];
}

interface GroupedDataItem{
  data:DataEntry[];
}

function CalendarComponent({startDate,income,expenses}:CalendarProps) {

  let groupedIncomes:GroupedDataItem[] = [];
  let groupedExpenses:GroupedDataItem[] = [];

  income.forEach(inc => {
    const day = getDate(inc.date);
    if(groupedIncomes[day-1]){
      groupedIncomes[day-1].data.push(inc);
    }else{
      groupedIncomes[day-1] = {data:[inc]};
    }
  })  

  expenses.forEach(exp => {
    const day = getDate(exp.date);
    if(groupedExpenses[day-1]){
      groupedExpenses[day-1].data.push(exp);
    }else{
      groupedExpenses[day-1] = {data:[exp]};
    }
  })  

  let daysInMonth;
  let dayOfWeek;
  if(startDate){
    daysInMonth = getDaysInMonth(startDate);
    dayOfWeek = getDay(startDate);
  }else{
    daysInMonth = getDaysInMonth(new Date());
    dayOfWeek = getDay(new Date());
  }

  dayOfWeek = (dayOfWeek || 7) - 1;

  return (
    <div>
      <div className="grid grid-cols-7 gap-x-8 gap-y-5 text-center mb-3">
        <p>Monday</p>
        <p>Tuesday</p>
        <p>Wednesday</p>
        <p>Thursday</p>
        <p>Friday</p>
        <p>Saturday</p>
        <p>Sunday</p>
      </div>
      
      <div className="grid grid-cols-7 gap-x-8 gap-y-5">
      {
        Array.from({ length: dayOfWeek }, (_r, index) => (
          <div className="invisible" key={index}>
          </div>
        ))
      }

      {
        Array.from({ length: daysInMonth }, (_r, index) => (
          <CalendarDay
            key={index}
            income={groupedIncomes[index]?.data ? groupedIncomes[index].data : null}
            expense={groupedExpenses[index]?.data ? groupedExpenses[index].data : null}
            day={index+1}
          />
        ))
      }
      </div>
    </div>
  )
}

export default CalendarComponent