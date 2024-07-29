import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { pokemonCollect } from '../Interfaces/pokemonCollect.interface';
import { Pokemon } from '../Interfaces/pokemon.interface';
import { Stat } from '../Interfaces/stat.interface';


@Injectable({providedIn: 'root'})
export class RestService {

    private serviceMainUrlAPI:string= 'https://pokeapi.co/api/v2/'
    public offset:number=1;
    public pokemonCollectJson: pokemonCollect = {
      next:null,
      previous:null,
       pokemons:null 
    };
    
    constructor(private http:HttpClient) { }

    public searchPokemonCollect():void{
      const params = new HttpParams()
      .set('offset',this.offset-1)
      .set('limit',5)
      ;

      this.http.get(`${this.serviceMainUrlAPI}pokemon?${params}`)
      .subscribe(res =>{
          this.formatToPokemonCollect(res);
      });
  }

  private formatToPokemonCollect(pokemons: Object) {
    const pokemonValues = Object.values(pokemons);
    
    this.pokemonCollectJson.next = pokemonValues[1] ;
    this.pokemonCollectJson.previous = pokemonValues[2] ;
    this.formatToPokemonDetail(pokemonValues[3])
  }

  private formatToPokemonDetail(pokemonsCollect: { name: string, url: string }[]) {
   
    let id:number =this.offset;
    pokemonsCollect.forEach(element => {
      this.pokemonInformation(id);
      id+=1;
    });
  }

  private pokemonInformation(id :number){
    let pokemonArray:Pokemon[]=[];
    // pokemonArray.push({name: element.name});
    const endpoint = this.serviceMainUrlAPI.concat(`pokemon/${id}/`);

    this.http.get(endpoint)
    .subscribe(res =>{
      
     
      const pokemon: {
        name:string,  
        weight:number
        sprites:{
                 front_default:string
                },
        forms:  [{
                  name:string
                  }],
        abilities:[{
          ability:{
            name:string
          }
        }],
        species: {
          name:string
        },
        base_experience:number,
        stats:[{base_stat:number,
                stat:{
                  name:string
                }
        }]
      
      } = JSON.parse(JSON.stringify(res));

      
    
      console.log(pokemon.stats[0].base_stat)
      });
  }
  
}





















//body para obtener las vistas







