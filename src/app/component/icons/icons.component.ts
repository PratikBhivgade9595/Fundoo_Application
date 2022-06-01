import { Component, Input, OnInit } from '@angular/core';
import { NoteService } from 'src/app/services/noteService/note.service';


@Component({
  selector: 'app-icons',
  templateUrl: './icons.component.html',
  styleUrls: ['./icons.component.scss']
})
export class IconsComponent implements OnInit {
  @Input() noteCard: any;
  
  constructor(private note: NoteService) { }

  ngOnInit(): void {
  }


  noteDelete() {
  let reqdata = {
   noteIdList: [this.noteCard.id],
   isDeleted: true,
 }
 this.note.noteGetDelete(reqdata).subscribe((response: any) => {
  console.log('Note Get Delete', response); 
})
  }
}
