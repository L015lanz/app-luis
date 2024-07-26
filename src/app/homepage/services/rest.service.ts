import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { xml2js } from 'xml-js';


@Injectable({providedIn: 'root'})
export class RestService {

    private serviceURLRest:string= 'https://pokeapi.co/api/v2/'
    constructor(private http:HttpClient) { }



    //codigo destinado a buscar dentro de Pokemon
    public searchInREST(id:number):void{
      const params = new HttpParams()
      .set('offset',id)
      .set('limit',5)
      ;

      this.http.get(`${this.serviceURLRest}pokemon?${params}`)
      .subscribe(res =>{
          console.log(res)
      });
  }


//parte SOAP
// private readonly mainUrl = "http://webservices.oorsprong.org/websamples.countryinfo/CountryInfoService.wso";

//     //private serviceURLSoap = `http://webservices.oorsprong.org/websamples.countryinfo/CountryInfoService.wso`;
    
//     private soapRequestPayload: string = `
//     <?xml version="1.0" encoding="utf-8"?>
// <soap12:Envelope xmlns:soap12="http://www.w3.org/2003/05/soap-envelope">
//   <soap12:Body>
//     <ListOfCountryNamesByName xmlns="http://www.oorsprong.org/websamples.countryinfo">
//     </ListOfCountryNamesByName>
//   </soap12:Body>
// </soap12:Envelope>`;
      
   
    
//     public searchInSoap(){
//         const headers = {
//             'Content-Type': 'text/xml',
//             'Access-Control-Allow-Origin':'*',
//             'Access-Control-Allow-Methods': 'GET, POST, PATCH, PUT, DELETE, OPTIONS',
//             'Access-Control-Allow-Headers': 'Origin, Content-Type, X-Auth-Token'       
//           };
          
//         const requestOptions: any =  { 
//             observe: 'body',
//             headers,
//             responseType: 'text' 
//           };

//           return this.http.post(this.mainUrl, this.soapRequestPayload, requestOptions);
  
//     }
//     public getSoapRequestPayload() {
//         return this.soapRequestPayload;
//     }

//     public xmlToJson(xml: any): Object {
//         return xml2js(xml, 
//           {
//            compact: true,
//            trim: true,
//            alwaysChildren: true,
//            ignoreInstruction: true,
//            ignoreDeclaration: true,
//            ignoreAttributes: true,
//            ignoreComment: true,
//            ignoreCdata: true,
//            ignoreDoctype: true,
//           });
//       };

}




















//body para obtener las vistas







