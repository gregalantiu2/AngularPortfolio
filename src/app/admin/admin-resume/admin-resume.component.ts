import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ResumeModel } from 'src/app/models/resume-model.model';
import { ResumeModelService } from 'src/app/models/resume-model.service';

@Component({
  selector: 'app-admin-resume',
  templateUrl: './admin-resume.component.html',
  styleUrls: ['./admin-resume.component.scss']
})
export class AdminResumeComponent implements OnInit {

  constructor(public service: ResumeModelService) { }

  ngOnInit() {
    this.service.getList();
    this.resetForm();
  }

  resetForm(form? : NgForm){
    if(form!=null) 
    form.resetForm();
    this.service.formData = {
        resumeID: null,
        company: '',
        role: '',
        startDT: '',
        endDT: '',
        description: '',
        sort: null,
        bullets: [''],
    }
  }

  populateForm(pickResume: ResumeModel){
    this.service.formData = Object.assign({},pickResume);
  }

  OnSubmit(form: NgForm){
    if(form.value.resumeID == null)
      this.InsertRecord(form);
    else
      this.UpdateRecord(form);
  }

  InsertRecord(form: NgForm){
    this.service.postResume(form.value).subscribe(res =>{
      this.resetForm(form);
      this.service.getList();
    });
  }

  UpdateRecord(form: NgForm){
    this.service.putResume(form.value).subscribe(res =>{
      this.resetForm(form);
      this.service.getList();
    });
  }

  deleteRecord(projectID: number){
    this.service.deleteResume(projectID).subscribe(res => {
      this.resetForm();
      this.service.getList();
    });
  }
}
