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
  employeeimageToUpload: File = null;
  friendimageToUpload: File = null;

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
  handleFileInput(files: FileList, type) {
    if (type == 'emp')
      this.employeeimageToUpload = files.item(0);
    if (type == 'friend')
      this.friendimageToUpload = files.item(0);
  }

  updateEmployee() {
    debugger;
    const formData: FormData = new FormData();
    formData.append('image', this.employeeimageToUpload, this.employeeimageToUpload.name);
    //formData.append('friendimage', this.friendimageToUpload, this.friendimageToUpload.name);

    this._instructorService.uploadImage(formData).subscribe(res => {
      debugger;
      const newformData: FormData = new FormData();
      newformData.append('image', this.friendimageToUpload, this.friendimageToUpload.name);
      this.model.empimage = res.imageUrl;
      this._instructorService.uploadImage(newformData).subscribe(friendres => {
        this.model.friendimage = friendres.imageUrl;
        debugger;
        this._instructorService.registerEmployee(this.model).subscribe(res => {
          this.toastr.successToastr('Record saved successfully', 'Success!');
          this._router.navigate(['/admin/instructor/list']);
        });
      });

    })

  }

}
