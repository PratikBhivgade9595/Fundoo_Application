import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private router: Router) { }

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

  logout() {
    localStorage.removeItem('token')
    this.router.navigateByUrl('login');
  }
}
