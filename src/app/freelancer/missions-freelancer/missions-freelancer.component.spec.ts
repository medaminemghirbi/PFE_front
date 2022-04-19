import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MissionsFreelancerComponent } from './missions-freelancer.component';

describe('MissionsFreelancerComponent', () => {
  let component: MissionsFreelancerComponent;
  let fixture: ComponentFixture<MissionsFreelancerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MissionsFreelancerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MissionsFreelancerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
