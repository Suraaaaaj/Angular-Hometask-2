import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../user';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
  changeDetection : ChangeDetectionStrategy.Default
})
export class UserComponent implements OnInit {
  @Input() curr!: User;
  currRoute: any;
  allowedUser = false;
  myBorder : any;
  constructor(private router: Router, private route: ActivatedRoute) {
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
    
      this.router.navigateByUrl('/', {skipLocationChange: true}).then(() => {
          this.router.navigate([this.router.url + 'manage/' + this.curr.id]);
      });
   }
  }

}
