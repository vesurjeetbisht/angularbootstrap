import { Component, OnInit } from '@angular/core';
import { InstructorService } from '../instructor.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class InstructorListComponent implements OnInit {

  public InstructorList: any = [];
  constructor(private _instructorService: InstructorService) { }

  ngOnInit() {
    this.loadEmployee()
  }
  removeEmployee(model) {
    this._instructorService.deleteEmployee(model).subscribe(rs => {
      debugger;
      this.loadEmployee()
    })
  }

  loadEmployee() {
    this._instructorService.employeeList().subscribe(res => {
      this.InstructorList = res.info;
    }, err => {
      console.log('Something went wrong!');
    }
    )
  }


}
