import { Component, OnInit } from '@angular/core';
import {UserService} from '../user.service';
import { ActivatedRoute, Params } from '@angular/router';

export class Primary{
	transactionId:string;
	accNo:number;
	date:Date;
	transactionType:string;
	newBalance :number;
}

@Component({
  selector: 'app-primary-transaction',
  templateUrl: './primary-transaction.component.html',
  styleUrls: ['./primary-transaction.component.css']
})
export class PrimaryTransactionComponent implements OnInit {

    userAcc:any='';
	primaryTransactionList: Object[];

	constructor(private route: ActivatedRoute, private userService: UserService) {
		this.route.params.forEach((params: Params) => {
     		this.userAcc = params['userAcc'];
		});

		this.getPrimaryTransactionList();
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

	ngOnInit() {}

}
