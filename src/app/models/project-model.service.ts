import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProjectModel } from './project-model.model';

@Injectable({
  providedIn: 'root'
})
export class ProjectModelService {

  formData: ProjectModel;
  list: ProjectModel[];
  readonly rootUrl = "http://portfolioapi-prod.us-west-2.elasticbeanstalk.com/api";

  constructor(public http: HttpClient) { }

  getList(){
      this.http.get(this.rootUrl + '/project').toPromise().then(res => this.list = res as ProjectModel[]);
  }

  postProject(formData: ProjectModel){
    return this.http.post(this.rootUrl + '/project',formData);
  }
  
  putProject(formData: ProjectModel){
    return this.http.put(this.rootUrl + '/project/' + formData.projectID,formData);
  }

  deleteProject(projectID: number){
    return this.http.delete(this.rootUrl + '/project/' + projectID);
  }
  
}
