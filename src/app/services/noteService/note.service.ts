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
    console.log(reqdata);
  
    let header = {
      headers:new HttpHeaders({
        'Content-type':'application/json',
        'Authorization': this.token
       })
    }
  
    return this.httpService.postService('/notes/trashNotes', reqdata, true, header)
  
  }

  archiveNote(reqdata: any) {
    console.log(reqdata);

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

  noteColor(reqdata: any) {

    console.log(reqdata);
    let header = {
      headers:new HttpHeaders({
        'Content-type':'application/json',
        'Authorization': this.token
       })
    }
  
    return this.httpService.postService('/notes/changesColorNotes', reqdata, true, header)
  
  }

  noteGetDeleteForever(reqdata: any) {

    console.log(reqdata);
  
    let header = {
      headers:new HttpHeaders({
        'Content-type':'application/json',
        'Authorization': this.token
       })
    }
    console.log("Delete Note Successfully")
    return this.httpService.postService('/notes/deleteForeverNotes', reqdata, true, header)
  
  }

  addLabel(reqdata: any) {
    this.token=localStorage.getItem("token")
    console.log(reqdata);
  
    let header = {
      headers:new HttpHeaders({
        'Content-type':'application/json',
        'Authorization': this.token
       })
    }
    console.log("Add label successfully")
    return this.httpService.postService('/noteLabels', reqdata, true, header)
  
  }

  getLabelData() {
    console.log(" Get Label call");
  
    
    let header = {
      headers:new HttpHeaders({
        'Content-type':'application/json',
        'Authorization': this.token
       })
    }
  
    return this.httpService.getService('/noteLabels/getNoteLabelList', true, header)
  }

  deleteLabel(reqdata: any) {
    console.log(reqdata);
  
    let header = {
      headers:new HttpHeaders({
        'Content-type':'application/json',
        'Authorization': this.token
       })
    }
    console.log("Delete label Successfully")
    return this.httpService.deleteService('/noteLabels/'+reqdata.id+'/deleteNoteLabel', reqdata, true)
  
  }

  updateLabel(reqdata: any) {
    console.log(reqdata);
  
    let header = {
      headers:new HttpHeaders({
        'Content-type':'application/json',
        'Authorization': this.token
       })
    }
    console.log("update label Successfully")
    return this.httpService.postService('/noteLabels/'+reqdata.userId+'/updateNoteLabel', reqdata, true, header)
  }
}
