import { Component, OnInit } from '@angular/core';
import { ProjectModelService } from 'src/app/models/project-model.service';
import { NgForm } from '@angular/forms';
import { ProjectModel } from 'src/app/models/project-model.model';

@Component({
  selector: 'app-admin-project',
  templateUrl: './admin-project.component.html',
  styleUrls: ['./admin-project.component.scss']
})
export class AdminProjectComponent implements OnInit {

  constructor(public service:ProjectModelService) { }

  ngOnInit() {
    this.service.getList();
    this.resetForm();
  }

  resetForm(form? : NgForm){
    if(form!=null) 
    form.resetForm();
    this.service.formData = {
        projectID : null,
        projectTitle : '',
        techUsed : '',
        description : '',
        sort : null
    }
  }

  populateForm(pickProject: ProjectModel){
    this.service.formData = Object.assign({},pickProject);
  }

  OnSubmit(form: NgForm){
    if(form.value.projectID == null)
      this.InsertRecord(form);
    else
      this.UpdateRecord(form);
  }

  InsertRecord(form: NgForm){
    this.service.postProject(form.value).subscribe(res =>{
      this.resetForm(form);
      this.service.getList();
    });
  }

  UpdateRecord(form: NgForm){
    this.service.putProject(form.value).subscribe(res =>{
      this.resetForm(form);
      this.service.getList();
    });
  }

  deleteRecord(projectID: number){
    this.service.deleteProject(projectID).subscribe(res => {
      this.resetForm();
      this.service.getList();
    });
  }

  

}
