import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PayfreelancerComponent } from './payfreelancer.component';

describe('PayfreelancerComponent', () => {
  let component: PayfreelancerComponent;
  let fixture: ComponentFixture<PayfreelancerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PayfreelancerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PayfreelancerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
