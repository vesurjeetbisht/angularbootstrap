import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrManager } from 'ng6-toastr-notifications';
import { InstructorService } from '../instructor.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class InstructorCreateComponent implements OnInit {

  public model: any = {};
  constructor(private _instructorService: InstructorService, private _router: Router,public toastr: ToastrManager) { }

  ngOnInit() {
  }
  createEmployee() {
    this._instructorService.registerEmployee(this.model).subscribe(res => {
      this.toastr.successToastr('Record saved successfully', 'Success!');
      this._router.navigate(['/admin/instructor/list']);
    })
  }
}
