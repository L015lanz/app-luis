import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
 
 
@Injectable({providedIn: 'root'})
export class SoapService {
   
    constructor(private http: HttpClient) {
 
    }
 
 
    private apiURL = '/MasterStatusGetSubscriberProfileTask/MasterStatusGetSubscriberProfileTaskService';
    private contentBodyRequets = `
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
</soapenv:Envelope>
    `;
 
 
 
    public sendRequest(){
        const headers = { 'Content-Type': 'text/xml; charset=UTF-8' };
 
   
    const options ={
        headers:headers,
        responseType:'text' as 'text'
    };
 
    this.http.post(this.apiURL, this.contentBodyRequets, options).subscribe(res =>{
        console.log(res)
    });
 
    }
 
   
 
}