import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutMeadminComponent } from './about-meadmin.component';

describe('AboutMeadminComponent', () => {
  let component: AboutMeadminComponent;
  let fixture: ComponentFixture<AboutMeadminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutMeadminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutMeadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
