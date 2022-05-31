import { Component, OnInit } from '@angular/core';
import { NoteService } from 'src/app/services/noteService/note.service';

@Component({
  selector: 'app-all-notes',
  templateUrl: './all-notes.component.html',
  styleUrls: ['./all-notes.component.scss']
})
export class AllNotesComponent implements OnInit {

  constructor(private note: NoteService) { }

  ngOnInit(): void {
    
  }

  getAllNote() {
    this.note.getNoteData().subscribe((response: any) => {
      console.log(response);
  });
}

}
