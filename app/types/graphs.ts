export interface OverviewGraphData{
    labels:string[];
    datasets:[{
        label:string;
        data:number[];
        backgroundColor:string[];
        borderWidth:number;
    }]
}