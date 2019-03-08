import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrManager } from 'ng6-toastr-notifications';
import { InstructorService } from '../instructor.service';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InstructorInfoComponent implements OnInit {
  public empID: String;
  public model: any = {};
  constructor(private _ActivatedRouter: ActivatedRoute,
    private _router: Router,
    private _instructorService: InstructorService,
    public toastr: ToastrManager) { }

  ngOnInit() {
    this._ActivatedRouter.params.subscribe(params => {
      this.empID = params["id"];
      this._instructorService.employeeInfo(this.empID).subscribe(res => {
        this.model = res.info;
      })

    })

  }
  updateEmployee() {
    this._instructorService.registerEmployee(this.model).subscribe(res => {
      this.toastr.successToastr('Record saved successfully', 'Success!');
      this._router.navigate(['/admin/instructor/list']);
    })
  }

}
