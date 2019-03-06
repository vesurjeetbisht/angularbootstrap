import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class InstructorCreateComponent implements OnInit {

  public model:any={};
  constructor() { }

  ngOnInit() {
  }
  createEmployee(){
    alert()
  }
}
