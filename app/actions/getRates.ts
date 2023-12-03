import axios from "axios";

export interface Rates{
    USD: number,
    RSD: number,
    EUR: number,
    CAD: number,
    JPY: number
}

export default async function getRates(){
    try {
       const result = await axios.get('https://api.fxratesapi.com/latest?currencies=USD,RSD,EUR,JPY,CAD');

       return result.data.rates;
    } catch (error) {
        return {
            USD: 0,
            RSD: 0,
            EUR: 0,
            CAD: 0,
            JPY: 0
        }
    }

}