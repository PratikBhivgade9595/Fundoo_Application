import { Injectable } from '@angular/core';
import { HttpService } from '../httpService/http.service';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NoteService {
  token: any;
  constructor(private httpService :HttpService) { 
    this.token=localStorage.getItem("token")
  }

  noteData(reqdata: any) { 
    console.log(reqdata);
  
    
    let header = {
      headers:new HttpHeaders({
        'Content-type':'application/json',
        'Authorization': this.token
       })
    }
  
    return this.httpService.postService('/notes/addNotes', reqdata, true, header)
  }
  
}
