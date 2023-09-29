import type {Expense,Income} from '@prisma/client'

export type TagSelect = {
    label:string;
    value:number;
    color:string;
}