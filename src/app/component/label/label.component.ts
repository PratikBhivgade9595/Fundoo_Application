import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { NoteService } from 'src/app/services/noteService/note.service';

@Component({
  selector: 'app-label',
  templateUrl: './label.component.html',
  styleUrls: ['./label.component.scss']
})
export class LabelComponent implements OnInit {
nClose = true;
labelUpdate: any;
id: any;
input : any;
img1 = true;
img2 = false;
img3 = true;
img4 = false;
userId: any;
labelList: any;
label: any;

  constructor( public dialogRef: MatDialogRef<LabelComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, private note: NoteService) { 
     
    }

  ngOnInit(): void {
    this.getLabelAll();
    // console.log(this.labelList);
    
  }

  close() {
    this.nClose = false;
    this.label = ' ';
  }

  visible() {
    this.nClose = true;
  }

  visible1() {
    this.img1 = false;
    this.img2 = true;
    this.img3 = false;
    this.img4 = true;
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  Done() {
    let reqdata = {
      label: this.label,
      isDeleted: false,
      userId: localStorage.getItem('userId'),   //payload localStorage.getItem('userId')
      
    }
    this.note.addLabel(reqdata).subscribe((response: any) => {
      console.log('label is hit', response);
      //this.getLabelAll();
    });
  }

  getLabelAll() {
    this.note.getLabelData().subscribe((response: any) => { 
      console.log(response.data);
      this.labelList = response.data.details;
  });
  }
  
  close1() {

  }

  delete(id: any) {
    let reqdata = {
      // label: this.label,
      id: id,   
      
    }
    this.note.deleteLabel(reqdata).subscribe((response: any) => {
      console.log('delete Label', response);
     
    });
  }

//   update(label: any) {
//     console.log(label)
//     let reqdata = {
//       label: label,
//       isDeleted: false,
//       id: label.id,
//       userId: label.userId,   

      
//     }
//     this.note.updateLabel(reqdata).subscribe((response: any) => {
//       console.log('update Label', response);
     
//     });
//  }

 
}
// localStorage.getItem('userId'),  label: this.updatedLabel,
        // isDeleted: false,
        // id:label.id,
        // userId: label.userId,