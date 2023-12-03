import {create} from 'zustand'
import { Rates } from '../actions/getRates'

interface RatesStoreProps{
    rates:Rates;
    onChange:(rates:Rates) => void;
}

export const useRatesStore = create<RatesStoreProps>(set => ({
    rates:{
        USD: 0,
        RSD: 0,
        EUR: 0,
        CAD: 0,
        JPY: 0
    },
    onChange:(rates:Rates) => {set({rates:rates})}
}))