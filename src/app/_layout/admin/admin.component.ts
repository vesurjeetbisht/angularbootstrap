import { Component, OnInit } from '@angular/core';
import { CommonService } from '../../common/common.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  name: String;
  constructor(private _commonService: CommonService) { }

  ngOnInit() {
    this.name = this._commonService.getusername();
  }

}
