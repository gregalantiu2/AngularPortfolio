import { Component, OnInit } from '@angular/core';
import { Dogs } from '../models/dogs.model';
import { DogsService } from '../models/dogs.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  constructor(public service: DogsService) { }

  ngOnInit() {
    this.resetForm();
    this.service.getList(); 
  }

  resetForm(form? : NgForm){
    if(form!=null) 
    form.resetForm();
    this.service.formData = {
        dogURL: '',
        dogTitle: '',
        dogsID: null
    }
  }

  OnSubmit(form: NgForm){
    if(form.value.dogsID == null)
      this.InsertRecord(form); 
    else
      this.UpdateRecord(form);
  }

  // OnSubmit(form: NgForm){
  //   this.InsertRecord(form); 
  // }

  InsertRecord(form:NgForm){
    this.service.postDogURL(form.value).subscribe(res =>{
      this.resetForm(form);
      this.service.getList();
    });
  }

  deleteRecord(dogsID: number){
    this.service.deleteDogURL(dogsID).subscribe(res => {
      this.resetForm();
      this.service.getList();
    });
  }

  populateForm(updateDog: Dogs){
    this.service.formData = Object.assign({},updateDog);
  }
 
  UpdateRecord(form: NgForm){
    this.service.putDogURL(form.value).subscribe(res =>{
      this.resetForm(form);
      this.service.getList();
    });
  }
}
