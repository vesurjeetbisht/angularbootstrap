import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  private _apiurl = environment.apiurl;

  constructor(private _http: HttpClient) { }

  register(inputmodel) {
    return this._http.post(this._apiurl + 'admin/register', inputmodel);
  }
  login(inputmodel):any {
    return this._http.post(this._apiurl + 'admin/login', inputmodel);
  }

}
