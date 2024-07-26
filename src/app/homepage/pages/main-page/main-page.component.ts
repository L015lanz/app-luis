import { Component } from '@angular/core';

@Component({
  selector: 'home-main-page',
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.css'
})
export class MainPageComponent {
    public tab1:boolean=true;
    public tab2:boolean=false;      
    public detailFlag:boolean=false;

  public activeTab(tab:number):void{

      if(tab===1){
        this.tab1=true;
        this.tab2=false
      }else{
        this.tab1=false;
        this.tab2=true;
      }
  }

  public showDetail(detail:boolean):void{
    this.detailFlag=detail;
  }
}