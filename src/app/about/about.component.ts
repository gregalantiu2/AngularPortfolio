import { Component, OnInit } from '@angular/core';
import { AboutmeService } from '../models/aboutme.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  constructor(public service: AboutmeService) { }

  ngOnInit() {
  //   this.service.formData = {
  //     aboutMeID : null,
  //     aboutmeText : ''
  // }
    this.service.getAboutMe();
  }

}
