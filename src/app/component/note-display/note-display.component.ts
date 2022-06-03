import { not } from '@angular/compiler/src/output/output_ast';
import { Component, Input, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { UpdateNoteComponent } from '../update-note/update-note.component';

@Component({
  selector: 'app-note-display',
  templateUrl: './note-display.component.html',
  styleUrls: ['./note-display.component.scss']
})
export class NoteDisplayComponent implements OnInit {
  
  constructor(public dialog: MatDialog) { }

  @Input() NoteArray: any;

  ngOnInit(): void {
    console.log(this.NoteArray);
  }

  openDialog(noteCard:any): void {
    const dialogRef = this.dialog.open(UpdateNoteComponent, {
      width: '480px',
      data: noteCard
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}
