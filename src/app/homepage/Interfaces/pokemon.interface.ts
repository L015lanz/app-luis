import { Stat } from "./stat.interface";

export interface Pokemon{
    name:string;
    img:string
    species:string;
    abilities:string[];
    base_experience:number;
    forms:string;
    weight:number;
    stats:Stat[]
}