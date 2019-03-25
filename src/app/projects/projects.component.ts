import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { ProjectModelService } from '../models/project-model.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  show: Number;
  constructor(public service: ProjectModelService) { }

  ngOnInit() {
    this.service.getList();
  }

  toggleShow(i : Number){
    if(this.show != null)
    {
      this.show = null;
    }
    else{
      this.show = i;
    }
    
  }

}
