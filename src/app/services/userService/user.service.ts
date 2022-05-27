import { Injectable } from '@angular/core';
import { HttpService } from '../httpService/http.service';
import { HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpService :HttpService) { }

registration(reqdata: any) { 
  console.log(reqdata);

  
  let header = {
    headers:new HttpHeaders({
      'Content-type':'application/json',
      //'Authorization':'token'
     })
  }

  return this.httpService.postService('/user/userSignUp', reqdata, false, header)
}


login(reqdata: any) {
  console.log(reqdata);

  let header = {
    headers: new HttpHeaders({
      'content-type': 'application/json'
    })
  }
  return this.httpService.postService('/user/login', reqdata, false, header)
}

forgotemail(reqdata: any) {
  console.log(reqdata);
  
  let header = {
    headers: new HttpHeaders({
      'Content-type': 'application/json',
    })
  }
  return this.httpService.postService('/user/reset', reqdata, false, header)
}

noteData(reqdata: any) { 
  console.log(reqdata);

  
  let header = {
    headers:new HttpHeaders({
      'Content-type':'application/json',
      //'Authorization':'token'
     })
  }

  return this.httpService.postService('/notes/addNotes', reqdata, false, header)
}

}