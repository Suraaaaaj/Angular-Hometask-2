import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-manage',
  templateUrl: './manage.component.html',
  styleUrls: ['./manage.component.css']
})
export class ManageComponent implements OnInit {
  currRoute!: String;
  routeLen!: any;
  constructor(private router: Router) {
    this.currRoute = this.router.url.split('/')[1];
    this.routeLen = this.router.url.split('/').length;
    // console.log(this.currRoute);
   }

  ngOnInit(): void {
  }

}
