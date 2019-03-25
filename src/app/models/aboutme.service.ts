import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Aboutme } from './aboutme.model';

@Injectable({
  providedIn: 'root'
})
export class AboutmeService {

  readonly rootUrl = "http://portfolioapi-prod.us-west-2.elasticbeanstalk.com/api";
  list: Aboutme[];
  formData: Aboutme;
  constructor(public http:HttpClient) {}

  getAboutMe(){
    // this.http.get(this.rootUrl + '/aboutMe/' + 1).toPromise().then(res => this.formData = res as Aboutme);
    this.http.get(this.rootUrl + '/aboutMe/' + 1).toPromise().then(res => this.formData = res as Aboutme);
  }

  postAboutMe(formData: Aboutme){
    return this.http.post(this.rootUrl + '/aboutMe',formData);
   }

   putAboutMe(formData: Aboutme){
    return this.http.put(this.rootUrl + '/aboutMe/' + formData.aboutMeID,formData);
  }


}
