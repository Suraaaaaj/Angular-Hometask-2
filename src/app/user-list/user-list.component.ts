import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UsersService } from '../services/users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  users! : User[]; 
  currRoute : String;
  constructor(private userService: UsersService,private router: Router) {
      this.currRoute = this.router.url;
   }

  ngOnInit(): void {
    this.users = this.userService.getUsers();
  }

  // checkValidity(user: User){
  //   console.log(user);
  //   return true;
  // }

}
