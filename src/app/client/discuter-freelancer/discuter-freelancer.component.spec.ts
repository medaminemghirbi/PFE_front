import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiscuterFreelancerComponent } from './discuter-freelancer.component';

describe('DiscuterFreelancerComponent', () => {
  let component: DiscuterFreelancerComponent;
  let fixture: ComponentFixture<DiscuterFreelancerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiscuterFreelancerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DiscuterFreelancerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
