import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  baseurl=environment.baseUrl

  constructor(private httpClient :HttpClient) { }

  postService(url: string, reqdata: any, token: boolean= false, httpOptions: any={}) {
    return this.httpClient.post(this.baseurl+url,reqdata,token && httpOptions) 
  }

  getService(url: string, token: boolean= false, httpOptions: any={}) {
    return this.httpClient.get(this.baseurl+url,token && httpOptions)
  }

  patchService() {

  }

  deleteService(url: string, token: boolean= false, httpOptions: any={}) {
    return this.httpClient.delete(this.baseurl+url,token && httpOptions) 

  }

  putService() {

  }
}
