import { not } from '@angular/compiler/src/output/output_ast';
import { Component, Input, OnInit, EventEmitter, Output, inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { UpdateNoteComponent } from '../update-note/update-note.component';
import {MatSnackBar} from '@angular/material/snack-bar';
import { Subscription } from 'rxjs';
import { DataService } from 'src/app/services/dataService/data.service';

@Component({
  selector: 'app-note-display',
  templateUrl: './note-display.component.html',
  styleUrls: ['./note-display.component.scss']
})
export class NoteDisplayComponent implements OnInit {
  @Input() NoteArray: any;
  filterString: any;
  @Output() trashNoteToRefresh = new EventEmitter<any>();
  @Output() archiveNoteAndRefresh = new EventEmitter<any>();
  @Output() updateNoteToRefresh = new EventEmitter<any>();
  @Output() commonToRefresh = new EventEmitter<any>();
 //msg: any;
  message: any;
  searchWord: any;
  subscription: any;
//  subscription: Subscription;

  constructor(public dialog: MatDialog, private snackBar: MatSnackBar, private data: DataService) { }

  ngOnInit(): void {
    console.log(this.NoteArray);
    //this.data.currentData.subscribe(message => this.message = message)
    this.subscription = this.data.currentData.subscribe(message => {
      this.message = message;
      console.log("display card search data======", message.data[0]);
      this.searchWord=message.data[0]
      // this.getAllNotes();
    })
  }

  // ngOnDestroy() {
  //   this.subscription.unsubscribe();
  // }

  // newMessage() {
  //   this.data.changeDataMessage("Hello from Sibling")
  // }


  openDialog(noteCard:any): void {  //dialog box
    const dialogRef = this.dialog.open(UpdateNoteComponent, {
      width: '480px',
      data: noteCard
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.updateNoteToRefresh.emit("update")
      this.snackBar.open("Note is Update","",{duration: 2000});
    });
  }

  trash(data: any) {
    console.log(data);
    this.trashNoteToRefresh.emit("trash")
  }

  archive(data: any) {
    console.log(data);
    this.archiveNoteAndRefresh.emit("archive")
  }

  refreshCommon(data: any) {
     console.log(data);
     this.commonToRefresh.emit("refresh")
  }
}

// this.DataService.receiveData.subscribe((response:any)=>{
    //   console.log("Data received",response)
    //   this.filterString=response || this.NoteArray;
    // })