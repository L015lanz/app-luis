import { Component } from '@angular/core';
import { RestService } from '../../services/rest.service';
import { SoapService } from '../../services/soap.service';

@Component({
  selector: 'home-main-page',
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.css'
})
export class MainPageComponent {
  soapRequestPayload: any;
  soapResponse: any;
  result: any;
  error: any;

  constructor(public restService: RestService, public soapService:SoapService){
    this.consultAPI(1);
  }
  
    
    public tab1:boolean=true;
    public tab2:boolean=false;      
    public detailFlag:boolean=false;  
    public detailID:number=0;

  public activeTab(tab:number):void{
      this.consultAPI(tab);
      if(tab===1){
        this.tab1=true;
        this.tab2=false
      }else{
        this.tab1=false;
        this.tab2=true;
      }
  }

  public consultAPI(tab:number){
    if(tab==1){
      this.restService.searchInREST(10);
    }
  }


  // public consultaSOAP(){
  //   this.hService.searchInSoap().subscribe({
  //     next: (data: any) => {
  //       this.soapRequestPayload = this.hService.getSoapRequestPayload();
  //       this.soapResponse = data;
  //       this.result = this.extractDataFromXml(data);
  //     }, 
  //     error: (error: any) => {
  //         this.error = 'Error';
  //     }
  //   });    
  // }

  // private extractDataFromXml(xmlData: string): void {
  //   let json : any =  this.hService.xmlToJson(xmlData);
  //   console.log(json);
  // }
  
  public showDetail(detailID:number):void{
    this.detailFlag=true;
    this.detailID=detailID
  }

  public hideDetail(detailFlag:boolean){
    this.detailFlag=detailFlag;
  }



  //prueba de proxy



  sendRequest() {
    const soapBody = `
       <soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:task="http://task.masterstatus.adapter.orchestrator.josm.tigo.com.hn/" xmlns:v1="http://adapter.josm.tigo.com.hn/RequestType/V1">
   <soapenv:Header/>
   <soapenv:Body>
      <task:executeTask>
         <!--Optional:-->
         <arg0>
            <v1:transactionId>?</v1:transactionId>
            <!--Optional:-->
            <v1:parameters>
               <!--Zero or more repetitions:-->
               <parameter>
                  <name>SUBSCRIBER</name>
                  <value>92506839</value>
               </parameter>
               <parameter>
                  <name>PROFILE</name>
                  <value>24</value>
               </parameter>
            </v1:parameters>
         </arg0>
      </task:executeTask>
   </soapenv:Body>
</soapenv:Envelope>`;

    this.soapService.sendSoapRequest(soapBody).subscribe(response => {
      console.log(response);
    });
  }
}


