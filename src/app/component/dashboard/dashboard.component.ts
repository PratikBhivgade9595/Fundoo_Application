import { Component, OnInit, } from '@angular/core';
import { Router } from '@angular/router';
import { MediaMatcher } from '@angular/cdk/layout';
import { Subscription } from 'rxjs';
import { DataService } from 'src/app/services/dataService/data.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { LabelComponent } from '../label/label.component';
import { NoteService } from 'src/app/services/noteService/note.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  // message:any;
  value: any;
  labelList: any = [];
  //noteLabel: any;
  label: any;
  userId: any;
  id: any;

  // subscription: Subscription;

  constructor(private router: Router, private data: DataService, public dialog: MatDialog, private note: NoteService) {
    
  }

  ngOnInit(): void {
    this.getLabel();
    // this.data.currentData.subscribe(message => this.message = message)
  }

  // ngOnDestroy() {
  //   this.subscription.unsubscribe();
  // }

  openDialog(): void {
    const dialogRef = this.dialog.open(LabelComponent, {
      width: '300px',
      data: this.labelList
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');

    });
  }

  getLabel() {
    this.note.getLabelData().subscribe((response: any) => {
      console.log("All labels", response.data);
      this.labelList = response.data.details;

    })
  }

  
  searchTitle(event: any) {
    console.log("input in search field===", event.target.value);
    this.value = event.target.value
    let Ddata = {
      type: 'search',
      data: [this.value]
    }
    this.data.changeDataMessage(Ddata)
  }
  // datas() {
  //   this.message
  // }

  // mobileQuery: MediaQueryList;
  // fillerNav: string[] = [
  //   'Notes',
  //   'Reminders',
  //   'Edit Labels',
  //   'Archive',
  //   'Trash',
  // ];

  isValid: boolean = false;

  expand1() {
    this.isValid = true;
  }

  expand2() {
    this.isValid = true;
  }

  expand3() {
    this.isValid = true;
  }

  expand4() {
    this.isValid = true;
  }

  expand5() {
    this.isValid = true;
  }

  logout() {
    localStorage.removeItem('token')
    this.router.navigateByUrl('login');
  }


}
