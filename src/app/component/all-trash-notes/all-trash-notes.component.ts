import { Component, OnInit } from '@angular/core';
import { NoteService } from 'src/app/services/noteService/note.service';

@Component({
  selector: 'app-all-trash-notes',
  templateUrl: './all-trash-notes.component.html',
  styleUrls: ['./all-trash-notes.component.scss']
})
export class AllTrashNotesComponent implements OnInit {
  notesTrash: any;

  constructor(private note: NoteService) { }

  ngOnInit(): void {
    this.getAllTrashNote();
  }

   getAllTrashNote() {
     this.note.getNoteTrashData().subscribe((response: any) => { 
       console.log(response);
       this.notesTrash = response.data.data
   });
 }
}
