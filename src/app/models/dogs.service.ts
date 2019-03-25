import { Injectable } from '@angular/core';
import { Dogs } from './dogs.model';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class DogsService {

  formData: Dogs;
  list: Dogs[];
  readonly rootUrl = "http://portfolioapi-prod.us-west-2.elasticbeanstalk.com/api"

  constructor(public http: HttpClient) {}

   postDogURL(formData: Dogs){
    return this.http.post(this.rootUrl + '/dogs',formData);
   }

   getList(){
     this.http.get(this.rootUrl + '/dogs').toPromise().then(res => this.list = res as Dogs[]);
   }

   putDogURL(formData: Dogs){
     return this.http.put(this.rootUrl + '/dogs/' + formData.dogsID,formData);
   }

   deleteDogURL(dogsID: number){
     return this.http.delete(this.rootUrl + '/dogs/' + dogsID);
   }

}