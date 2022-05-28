import { Component, OnInit } from '@angular/core';
import { throwMatDuplicatedDrawerError } from '@angular/material/sidenav';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NoteService } from 'src/app/services/noteService/note.service';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.scss']
})
export class NoteComponent implements OnInit {
noteForm!: FormGroup;
submitted = false;

  constructor(private formBuilder: FormBuilder, private note: NoteService) { }

  ngOnInit() {
    this.noteForm = this.formBuilder.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      // service: "advance"
    });
  }

  get f() { return this.noteForm.controls; }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.noteForm.valid) {
      // return;
      let reqdata = {
        title: this.noteForm.value.title,
        description: this.noteForm.value.description
        // service: this.noteForm.value.service
     }  
      this.note.noteData(reqdata).subscribe((response: any) => {
        console.log(response);
      }); 
    }

  }

  visible:boolean = true;

  press() {
    this.visible = false;
  }

  close() {
    this.visible = true;
    
  }

  
}
