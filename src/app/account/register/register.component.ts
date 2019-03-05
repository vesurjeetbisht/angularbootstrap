import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccountService } from '../account.service'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
public email:String;
public password:String;
public name:String;
public role:String;

  constructor(private _router: Router, private _accountService: AccountService) { }
  ngOnInit() {
  }

}
