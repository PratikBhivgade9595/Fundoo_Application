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
    console.log(this.noteCard)
  }


  noteDelete() {
  let reqdata = {
   noteIdList: [this.noteCard.id],    //payload
   isDeleted: true,
 }
 this.note.noteGetDelete(reqdata).subscribe((response: any) => {
  console.log('Note Get Delete', response); 
})
  }

  noteArchive() {
    let reqdata = {
      noteIdList: [this.noteCard.id],
      isArchived: true,
    }
    this.note.archiveNote(reqdata).subscribe((response: any) => {
     console.log('Note Archive', response); 
   })
  }

  colors: Array<any> = [
    { code: '#fff', name: 'white' },
    { code: '#f28b82', name: 'red' },
    { code: '#fbbc04', name: 'orange' },
    { code: '#FFFF00', name: 'yellow' },
    { code: '#ccff90', name: 'green' },
    { code: '#a7ffeb', name: 'teal' },
    { code: '#cbf0f8', name: 'Blue' },
    { code: '#aecbfa', name: 'darkblue' },
    { code: '#d7aefb', name: 'purple' },
    { code: '#fdcfe8', name: 'pink' },
    { code: '#e6c9a8', name: 'brown' },
    { code: '#e8eaed', name: 'grey' },
  ];


  setColor(color:any) {
    this.noteCard.color = color;
    
    let reqdata = {
      color: color,
      noteIdList: [this.noteCard.id],
    }
    this.note.noteColor(reqdata).subscribe((response: any) => {
      console.log('Note is Color', response); 
    })
  }
}
