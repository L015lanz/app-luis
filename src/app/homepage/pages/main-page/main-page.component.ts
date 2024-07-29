import { Component } from '@angular/core';
import { RestService } from '../../services/rest.service';
import { SoapService } from '../../services/soap.service';

@Component({
  selector: 'home-main-page',
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.css'
})
export class MainPageComponent {
 
    public tab1:boolean=true;
    public tab2:boolean=false;      
    public detailFlag:boolean=false;  
    public detailID:number=0;
    
    constructor(public restService: RestService, public soapService:SoapService){
    }
  public activeTab(tab:number):void{
     
      if(tab===1){
        this.restService.searchPokemonCollect();
        this.tab1=true;
        this.tab2=false
      }else{
        this.soapService.sendRequest();
        this.tab1=false;
        this.tab2=true;
      }
  }

  

 


  
  public showDetail(detailID:number):void{
    this.detailFlag=true;
    this.detailID=detailID
  }

  public hideDetail(detailFlag:boolean){
    this.detailFlag=detailFlag;
  }


 
}


