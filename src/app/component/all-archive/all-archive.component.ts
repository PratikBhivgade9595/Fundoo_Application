import { Component, OnInit } from '@angular/core';
import { NoteService } from 'src/app/services/noteService/note.service';

@Component({
  selector: 'app-all-archive',
  templateUrl: './all-archive.component.html',
  styleUrls: ['./all-archive.component.scss']
})
export class AllArchiveComponent implements OnInit {
 notesArchive: any;
  constructor(private note: NoteService) { }

  ngOnInit(): void {
     this.getAllArchiveNote();
  }

   getAllArchiveNote() {
     this.note.getNoteArchiveData().subscribe((response: any) => { 
       console.log(response);
       this.notesArchive = response.data.data;
       this.notesArchive.reverse();
   });
 }
 
 Refresh(data: any) {
  this.getAllArchiveNote();
 }
}
