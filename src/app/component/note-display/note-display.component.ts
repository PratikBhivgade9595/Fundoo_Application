import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-note-display',
  templateUrl: './note-display.component.html',
  styleUrls: ['./note-display.component.scss']
})
export class NoteDisplayComponent implements OnInit {
  
  constructor() { }

  @Input() NoteArray: any;

  ngOnInit(): void {
    console.log(this.NoteArray);
  }

}
