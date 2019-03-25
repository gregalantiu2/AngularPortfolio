import { Component, OnInit } from '@angular/core';
import { DogsService } from '../models/dogs.service';

@Component({selector: 'ngbd-carousel-basic'
            ,templateUrl: './dogcarousel.component.html'
            ,styleUrls: ['./dogcarousel.component.scss']
})


export class DogcarouselComponent implements OnInit {

  constructor(public service: DogsService) { }

  ngOnInit() {
    this.service.getList();
  }

}
