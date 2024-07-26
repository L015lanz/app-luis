import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SoapService {
  private apiUrl = '/api/MasterStatusGetSubscriberProfileTask/MasterStatusGetSubscriberProfileTaskService?wsdl';

  constructor(private http: HttpClient) {}

  sendSoapRequest(soapBody: string) {
    const headers = { 'Content-Type': 'text/xml;charset=UTF-8' };
    
    const options ={
        headers:headers,
        responseType:'text' as 'text'
    };
    return this.http.post(this.apiUrl, soapBody, options);
  }
}
