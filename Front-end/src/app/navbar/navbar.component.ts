import { UserService } from './../user.service';
import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';
import { Router, Params, ActivatedRoute } from '@angular/router';
import { PrimaryTransactionComponent } from '../primary-transaction/primary-transaction.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
	[x: string]: any;
    userAcc:string;
  loggedIn: boolean;

	constructor(private loginService: LoginService,private userService:UserService,private router : Router,private routers:ActivatedRoute) {
		if(localStorage.getItem('PortalAdminHasLoggedIn') == '') {
			this.loggedIn = false;
		} else {
			this.loggedIn = true;
		}
		this.userAcc=this.routers.snapshot.params['username']
	}

	logout(){
		//this.loginService.logout().subscribe(
			//res => {
				//this.loggedIn=false;
			    //localStorage.setItem('PortalAdminHasLoggedIn', '');
				//localStorage.removeItem('PortalAdminHasLoggedIn');
			//},
			//err => console.log(err)
			//);
		this.loggedIn=false;
		//localStorage.setItem('PortalAdminHasLoggedIn', '');
		//localStorage.removeItem('PortalAdminHasLoggedIn');
		//localStorage.setItem('PortalAdminHasLoggedIn', '');
		localStorage.clear();
		localStorage.setItem('PortalAdminHasLoggedIn', '');
		//location.reload();
		this.router.navigate(['/login']);
	}

	getDisplay() {
    if(!this.loggedIn){
      return "none";
    } else {
      return "";
    }
  }

  getPrimaryTransactionList() {
	this.userService.getPrimaryTransactionList(this.userAcc).subscribe(
		res => {
			console.log(JSON.parse(JSON.stringify(res))._body);
			this.primaryTransactionList = JSON.parse(JSON.stringify(res));
		  },
		  error => console.log(error)
	)
}
  ngOnInit() {
  }
  
}
