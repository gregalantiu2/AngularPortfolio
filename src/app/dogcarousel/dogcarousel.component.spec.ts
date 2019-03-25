import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DogcarouselComponent } from './dogcarousel.component';

describe('DogcarouselComponent', () => {
  let component: DogcarouselComponent;
  let fixture: ComponentFixture<DogcarouselComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DogcarouselComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DogcarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
