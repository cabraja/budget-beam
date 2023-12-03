import {create} from 'zustand';

interface Currency{
    id:CurrencyCode;
    name:CurrencyName;
    label:string;
    isLeft?:boolean;
}

export enum CurrencyName{
    USD = "USD",
    RSD = "RSD",
    EUR = "EUR",
    CAD = "CAD",
    JPY = "JPY"
}

export enum CurrencyCode{
    USD = 0,
    RSD = 1,
    EUR = 2,
    CAD = 3,
    JPY = 4
}

export const currencies = [
    {
        id:CurrencyCode.USD,
        name: CurrencyName.USD,
        label: '$',
        isLeft: true
    },
    {
        id: CurrencyCode.RSD,
        name: CurrencyName.RSD,
        label: 'din',
        isLeft:false
    },
    {
        id: CurrencyCode.EUR,
        name: CurrencyName.EUR,
        label: '€',
        isLeft:false
    },
    {
        id: CurrencyCode.CAD,
        name: CurrencyName.CAD,
        label: '$',
        isLeft:true
    },
    {
        id: CurrencyCode.JPY,
        name: CurrencyName.JPY,
        label: '¥',
        isLeft:false
    }
    
]

interface CurrencyStore{
   currency: Currency;
   onChange:(code:CurrencyCode) => void
}

export const useCurrencyStore = create<CurrencyStore>((set) => ({
    currency: currencies[CurrencyCode.USD],
    onChange:(id:CurrencyCode = CurrencyCode.USD) => {
        set({currency:currencies[id]})  
    }
}))