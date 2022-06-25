import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';
import { NoteService } from 'src/app/services/noteService/note.service';
import { ActivatedRoute } from '@angular/router';
import { AllArchiveComponent } from '../all-archive/all-archive.component';
import { AllTrashNotesComponent } from '../all-trash-notes/all-trash-notes.component';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-icons',
  templateUrl: './icons.component.html',
  styleUrls: ['./icons.component.scss']
})
export class IconsComponent implements OnInit {
  @Input() noteCard: any;
  @Output() archiveNoteAndRefresh = new EventEmitter<any>();
  @Output() trashNoteToRefresh = new EventEmitter<any>();
  @Output() commonToRefresh = new EventEmitter<any>();
  Archive = true;
  UnArchive = false;
  trashIcons = false;
  icons = true;

  constructor(private note: NoteService, private activeRoute: ActivatedRoute, private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    console.log(this.noteCard)
    let Component = this.activeRoute.snapshot.component;
    if (Component == AllArchiveComponent) {  // we do to change icons.
      this.UnArchive = true;
      this.Archive = false;
      console.log(this.UnArchive);
    }
    if (Component == AllTrashNotesComponent) {
      this.trashIcons = true;
      this.icons = false;
      console.log(this.trashIcons);
    }
  }


  noteDelete() {
    let reqdata = {
      noteIdList: [this.noteCard.id],    //payload
      isDeleted: true,
    }
    this.note.noteGetDelete(reqdata).subscribe((response: any) => {
      console.log('Note Get Delete', response);
      this.trashNoteToRefresh.emit(response)
      this.snackBar.open("Note is Delete","",{duration: 2000});
    })
  }

  noteArchive() {
    let reqdata = {
      noteIdList: [this.noteCard.id],
      isArchived: true,
    }
    this.note.archiveNote(reqdata).subscribe((response: any) => {
      console.log('Note Archive', response);
      this.archiveNoteAndRefresh.emit(response)
      this.snackBar.open("Note is Archive","",{duration: 2000});
    })
  }

  noteUnArchive() {
    let reqdata = {
      noteIdList: [this.noteCard.id],
      isArchived: false,
    }
    this.note.archiveNote(reqdata).subscribe((response: any) => {
      console.log('Note Un-Archive', response);
      this.commonToRefresh.emit(response)
      this.snackBar.open("Note is UnArchive","",{duration: 2000});
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


  setColor(color: any) {
    this.noteCard.color = color;

    let reqdata = {
      color: color,
      noteIdList: [this.noteCard.id],
    }
    this.note.noteColor(reqdata).subscribe((response: any) => {
      console.log('Note is Color', response);
      this.snackBar.open("Note Get Color","",{duration: 2000});
    })
  }

  deleteForever() {
    let reqdata = {
      noteIdList: [this.noteCard.id],    //payload
      isDeleted: true,
    }
    this.note.noteGetDeleteForever(reqdata).subscribe((response: any) => {
      console.log('Note Get Delete Forever', response);
      this.commonToRefresh.emit(response)

      this.snackBar.open("Note Delete Permanent","",{duration: 2000});
    })
  }

  restore() {
    let reqdata = {
      noteIdList: [this.noteCard.id],    //payload
      isDeleted: false,
    }
    this.note.noteGetDelete(reqdata).subscribe((response: any) => {
      console.log('Note Get Restore', response);
      this.commonToRefresh.emit(response)
      this.snackBar.open("Note is Restore","",{duration: 2000});
    })
  }
}
