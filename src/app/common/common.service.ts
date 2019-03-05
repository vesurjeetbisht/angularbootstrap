import { Injectable } from '@angular/core';
import { LocalStorageService } from 'angular-web-storage';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private _localstorage: LocalStorageService) { }

  public setLocalStorageValue(key, value) {
    this._localstorage.set(key, value);
  }
  public getLocalStorageValue(key) {
    return this._localstorage.get(key);
  }
  public getusername(): String {
    return this._localstorage.get('name');
  }
}
