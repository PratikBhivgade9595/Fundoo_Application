import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  isValid:boolean = false;

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
}
