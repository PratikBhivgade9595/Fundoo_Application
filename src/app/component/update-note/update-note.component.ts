import { Component, Inject, OnInit,EventEmitter,Output} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { NoteService } from 'src/app/services/noteService/note.service';

@Component({
  selector: 'app-update-note',
  templateUrl: './update-note.component.html',
  styleUrls: ['./update-note.component.scss']
})
export class UpdateNoteComponent implements OnInit {

title: any;
description: any;
id: any;
// @Output()updateNoteToRefresh = new EventEmitter<any>();

  constructor(public dialogRef: MatDialogRef<UpdateNoteComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, private note: NoteService) {
      this.title= data.title
      this.description=data.description
      this.id=data.id
     }

  ngOnInit(): void {
    console.log("from note-display single note", this.data);
    
  }


  close() {
    let reqdata = {
      title: this.title,
      description: this.description,
      noteId: this.id,
    }
    this.note.noteUpdate(reqdata).subscribe((response: any) => {
     console.log('Note Get Update', response); 
      // this.updateNoteToRefresh.emit(response)
   })
  }
}
