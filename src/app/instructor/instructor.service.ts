import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class InstructorService {

  public apiUrl: String = environment.apiurl;
  constructor(private _http: HttpClient) { }

  public registerEmployee(model: any) {
    return this._http.post(this.apiUrl + 'admin/instructor/create', model);
  }
  public employeeList() {
    return this._http.get(this.apiUrl + 'instructor');
  }
}
