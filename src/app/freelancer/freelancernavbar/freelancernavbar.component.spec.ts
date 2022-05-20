import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FreelancernavbarComponent } from './freelancernavbar.component';

describe('FreelancernavbarComponent', () => {
  let component: FreelancernavbarComponent;
  let fixture: ComponentFixture<FreelancernavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FreelancernavbarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FreelancernavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
