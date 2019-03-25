import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ResumeModel } from './resume-model.model';

@Injectable({
  providedIn: 'root'
})
export class ResumeModelService {

  formData: ResumeModel;
  list: ResumeModel[];
  readonly rootUrl = "http://portfolioapi-prod.us-west-2.elasticbeanstalk.com/api";

  constructor(public http: HttpClient) { }

  getList(){
      this.http.get(this.rootUrl + '/resumes').toPromise().then(res => this.list = res as ResumeModel[]);
  }

  postResume(formData: ResumeModel){
    formData.bullets = ['test','test2'];
    return this.http.post(this.rootUrl + '/resumes',formData);
  }
  
  putResume(formData: ResumeModel){
    formData.bullets = ['test','test2'];
    return this.http.put(this.rootUrl + '/resumes/' + formData.resumeID,formData);
  }

  deleteResume(resumeID: number){
    return this.http.delete(this.rootUrl + '/resumes/' + resumeID);
  }
}
