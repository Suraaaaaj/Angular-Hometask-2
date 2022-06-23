import { Component, OnChanges, OnInit, SimpleChange } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../../user';
import { UsersService } from 'src/app/services/users.service';
@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit{
  currRoute!:string;
  user!: User;
  constructor(private router: Router, private userService: UsersService) {
    this.currRoute = this.router.url.split('/')[2];
    console.log("curr: " + this.currRoute)
    this.user = this.userService.getUser(this.currRoute);
   }

   ngOnInit(): void {
    
   }
  

}
