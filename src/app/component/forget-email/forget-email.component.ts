import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/userService/user.service';

@Component({ //template
  selector: 'app-forget-email',
  templateUrl: './forget-email.component.html',
  styleUrls: ['./forget-email.component.scss']
})

export class ForgetEmailComponent implements OnInit {
  emailForm!: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder, private user: UserService) { }

  ngOnInit() {
    this.emailForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      service: "advance"
    });
  }

  get f() { return this.emailForm.controls; }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.emailForm.valid) {
      // return;
      let reqData = {
        email: this.emailForm.value.email,
        service: this.emailForm.value.service
      }

      this.user.forgotemail(reqData).subscribe((response: any) => {
        console.log(response);

      });
    }

  }

}
