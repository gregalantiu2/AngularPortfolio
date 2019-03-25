import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { ResumeModelService } from '../models/resume-model.service';
import { AngularWaitBarrier } from 'blocking-proxy/built/lib/angular_wait_barrier';
@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss']
})
export class ResumeComponent implements OnInit {
  bulletpoints: string[];
  show: Number;

  constructor(public service: ResumeModelService) { }

  ngOnInit() {
    this.service.getList();
  }
  toggleShow(i : Number){
    if(this.show == i)
    {
      this.show = null;
    }
    else{
      this.show = i;
    }
  }

}