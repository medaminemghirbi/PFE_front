import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailfreelancerComponent } from './detailfreelancer.component';

describe('DetailfreelancerComponent', () => {
  let component: DetailfreelancerComponent;
  let fixture: ComponentFixture<DetailfreelancerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailfreelancerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailfreelancerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
