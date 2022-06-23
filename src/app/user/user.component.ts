import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../user';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  @Input() curr!: User;
  currRoute: any;
  allowedUser = false;
  myBorder : any;
  constructor(private router: Router) {
    this.currRoute = this.router.url;
  }
  
  ngOnInit(): void {
    if(this.currRoute=='/active' && this.curr.isDeleted == false){
      this.allowedUser =  true;
      this.myBorder = '1px solid #69c369';
    }else if(this.currRoute=='/deleted' && this.curr.isDeleted == true){
      this.allowedUser =  true;
      this.myBorder = '1px solid #cb4747';
    }else if(this.currRoute=="/manage" || this.currRoute.split('/').length==3) {
      
      this.allowedUser = true;
      if(this.curr.isDeleted == true) this.myBorder = '1px solid #cb4747';
      else this.myBorder = '1px solid #69c369';
    }
    // console.log(this.router);
  }

  getUserStatus(){
    if(this.currRoute=='/active'){
      return "Deactivate";
    }else if(this.currRoute=='/deleted'){
      return "Activated";
    }else{
      return "Details";
    }
  }

  changeStatusOrViewDetails(){
   if(this.currRoute == '/active' || this.currRoute == "/deleted"){
      this.curr.isDeleted = !this.curr.isDeleted;
      let currentUrl = this.router.url;
      this.router.navigateByUrl('/', {skipLocationChange: true}).then(() => {
          this.router.navigate([currentUrl]);
      });
   }else{
      this.router.navigate(['manage/'+ this.curr.id]);
      let currentUrl = this.router.url.split('/')[1];
      // console.log(currentUrl.split('/')[1]);
      this.router.navigateByUrl('/', {skipLocationChange: true}).then(() => {
          this.router.navigate([currentUrl + "/" + this.curr.id]);
      });
   }
  }

}
