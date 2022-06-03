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
  
  getNoteData() { 
    console.log("api call");
  
    
    let header = {
      headers:new HttpHeaders({
        'Content-type':'application/json',
        'Authorization': this.token
       })
    }
  
    return this.httpService.getService('/notes/getNotesList', true, header)
  }

  noteGetDelete(reqdata: any) {
    
  
    let header = {
      headers:new HttpHeaders({
        'Content-type':'application/json',
        'Authorization': this.token
       })
    }
  
    return this.httpService.postService('/notes/trashNotes', reqdata, true, header)
  
  }

  archiveNote(reqdata: any) {

    let header = {
      headers:new HttpHeaders({
        'Content-type':'application/json',
        'Authorization': this.token
       })
    }
  
    return this.httpService.postService('/notes/archiveNotes', reqdata, true, header)
  
  }

  getNoteArchiveData() {
    console.log(" Get Archive Note call");
  
    
    let header = {
      headers:new HttpHeaders({
        'Content-type':'application/json',
        'Authorization': this.token
       })
    }
  
    return this.httpService.getService('/notes/getArchiveNotesList', true, header)
  }

  getNoteTrashData() {
    console.log(" Get Trash Note call");
  
    
    let header = {
      headers:new HttpHeaders({
        'Content-type':'application/json',
        'Authorization': this.token
       })
    }
  
    return this.httpService.getService('/notes/getTrashNotesList', true, header)
  }

  noteUpdate(reqdata: any) {
    console.log("Note updated");
    
    let header = {
      headers:new HttpHeaders({
        'Content-type':'application/json',
        'Authorization': this.token
       })
    }
  
    return this.httpService.postService('/notes/updateNotes', reqdata, true, header)
  
  }
}
