import { Pokemon } from "./pokemon.interface";

export interface pokemonCollect{
    next:string | null;
    previous:string | null;
    pokemons:Pokemon[]|null;
}