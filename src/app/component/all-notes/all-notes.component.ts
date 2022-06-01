import { Component, OnInit } from '@angular/core';
import { NoteService } from 'src/app/services/noteService/note.service';

@Component({
  selector: 'app-all-notes',
  templateUrl: './all-notes.component.html',
  styleUrls: ['./all-notes.component.scss']
})
export class AllNotesComponent implements OnInit {
  notesArray: any;
  

  constructor(private note: NoteService) { }

  ngOnInit(): void {
    this.getAllNote();
  }

  getAllNote() {
    this.note.getNoteData().subscribe((response: any) => { 
      console.log(response);
      this.notesArray = response.data.data;
      this.notesArray.reverse();
      this.notesArray = this.notesArray.filter((notedata: any) => {
        return notedata.isDeleted === false && notedata.isArchived == false;
      })
  });
  
}

}
