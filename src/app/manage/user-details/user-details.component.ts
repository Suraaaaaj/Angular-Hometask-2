import { Component, OnChanges, OnInit, SimpleChange } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../../user';
import { UsersService } from 'src/app/services/users.service';
@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit{

  currUser:string;
  user: User;
  constructor(private route: ActivatedRoute, private userService: UsersService) {
    this.currUser = this.route.snapshot.params['id'];
    this.user = this.userService.getUser(this.currUser);
  }

   ngOnInit(): void {
    
   }
  

}
