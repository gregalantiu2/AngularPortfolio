import { Component, OnInit } from '@angular/core';
import { AboutmeService } from 'src/app/models/aboutme.service';
import { Aboutme } from 'src/app/models/aboutme.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-about-meadmin',
  templateUrl: './about-meadmin.component.html',
  styleUrls: ['./about-meadmin.component.scss']
})
export class AboutMeadminComponent implements OnInit {

  constructor(public service:AboutmeService) { }

  ngOnInit() {
    this.service.getAboutMe();
    this.resetForm();
  }

  updateAboutMe(form: NgForm){
    this.service.putAboutMe(form.value).subscribe(res =>{
      // this.resetForm(form);
    });;
  }

  OnSubmit(form: NgForm){
    this.updateAboutMe(form);
  }

  resetForm(form? : NgForm){
    if(form!=null) 
    form.resetForm();
    this.service.formData = {
        aboutMeID : null,
        aboutMeText : ''
    }
  }
}
