import { Rates } from "@/app/actions/getRates";
import {CurrencyName} from "@/app/hooks/useCurrency";

export function formatCurrency(amount:number,currency:CurrencyName,rates:Rates):number{
    if(currency === CurrencyName.USD || rates.USD === 0){
        return +(Math.round(amount * 100) / 100).toFixed(2);
    }else{
        const converted = amount * rates[currency];
        return +(Math.round(converted * 100) / 100).toFixed(2);
    }
}

export function formatCurrencyForInput(amount:number,currency:CurrencyName,rates:Rates):number{
    if(currency === CurrencyName.USD || rates.USD === 0){
        return +(Math.round(amount * 100) / 100).toFixed(2);
    }else{
        const converted = amount / rates[currency];
        return +(Math.round(converted * 100) / 100).toFixed(2);
    }
}