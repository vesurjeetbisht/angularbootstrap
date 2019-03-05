import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccountService } from '../account.service';
import { CommonService } from '../../common/common.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public email: String;
  public password: String;
  constructor(private _router: Router, private _accountService: AccountService, private _commonService: CommonService) { }

  ngOnInit() {
  }
  login() {
    let loginmodel: any = {};
    loginmodel.email = this.email;
    loginmodel.password = this.password;

    this._accountService.login(loginmodel).subscribe(res => {
      debugger;
      if (res.token != undefined) {
        this._commonService.setLocalStorageValue('token', res.token);
        this._commonService.setLocalStorageValue('name', res.name);
        this._router.navigate(['/admin/dashboard']);
      }
    })


  }
}
