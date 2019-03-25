import { Component, OnInit } from '@angular/core';
import { DogsService } from '../models/dogs.service';

@Component({
  selector: 'app-dogs',
  templateUrl: './dogs.component.html',
  styleUrls: ['./dogs.component.scss']
})
export class DogsComponent implements OnInit {

  constructor(public service: DogsService) { }

  ngOnInit() {
    this.service.getList();
  }

}
