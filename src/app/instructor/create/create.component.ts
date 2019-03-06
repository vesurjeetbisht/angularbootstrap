import { Component, OnInit } from '@angular/core';
import { InstructorService } from '../instructor.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class InstructorCreateComponent implements OnInit {

  public model: any = {};
  constructor(private _instructorService: InstructorService) { }

  ngOnInit() {
  }
  createEmployee() {
    this._instructorService.registerEmployee(this.model).subscribe(res => {
      alert(res);
    })
  }
}
