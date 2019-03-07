import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { InstructorService } from '../instructor.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class InstructorCreateComponent implements OnInit {

  public model: any = {};
  constructor(private _instructorService: InstructorService, private _router: Router) { }

  ngOnInit() {
  }
  createEmployee() {
    this._instructorService.registerEmployee(this.model).subscribe(res => {
      this._router.navigate(['/admin/instructor/list']);
    })
  }
}
