import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarclientComponent } from './sidebarclient.component';

describe('SidebarclientComponent', () => {
  let component: SidebarclientComponent;
  let fixture: ComponentFixture<SidebarclientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SidebarclientComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebarclientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
