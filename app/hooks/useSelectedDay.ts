import {create} from 'zustand';
import { DataEntry } from '@/components/dashboard/calendar/CalendarComponent';

interface DayStore{
    income:DataEntry[];
    expenses:DataEntry[];
    onChange: (inc:DataEntry[],exp:DataEntry[]) => void;
}

const useSelectedDay = create<DayStore>(set => ({
    income: [],
    expenses:[],
    onChange: (incomeData:DataEntry[],expensesData:DataEntry[]) => {
        set({income:incomeData,expenses:expensesData})
    }
}))

export default useSelectedDay;