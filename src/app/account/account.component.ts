import { Component, OnInit } from '@angular/core';
import { AccountService } from './account.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
  accountList: Array<any> = [];

  constructor(
    private myserve: AccountService,
  ) { }

  ngOnInit() {
  }

  getAccountList() {
    this.accountList = [
      {accountName: ''}
    ]
  }

}
