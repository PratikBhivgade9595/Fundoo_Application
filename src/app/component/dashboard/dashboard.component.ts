import { Component, OnInit, } from '@angular/core';
import { Router } from '@angular/router';
import { MediaMatcher } from '@angular/cdk/layout';
import { Subscription } from 'rxjs';
import { DataService } from 'src/app/services/dataService/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  // message:any;
  value: any;
  // subscription: Subscription;

  constructor(private router: Router, media: MediaMatcher, private data: DataService) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
  }

  ngOnInit(): void {
    // this.data.currentData.subscribe(message => this.message = message)
  }

  // ngOnDestroy() {
  //   this.subscription.unsubscribe();
  // }

  searchTitle(event:any){
    console.log("input in search field===",event.target.value);
    this.value=event.target.value
    let Ddata={
      type:'search',
      data:[this.value]
    }
    this.data.changeDataMessage(Ddata)
  }
  // datas() {
  //   this.message
  // }

  mobileQuery: MediaQueryList;
  fillerNav: string[] = [
    'Notes',
    'Reminders',
    'Edit Labels',
    'Archive',
    'Trash',
  ];

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
