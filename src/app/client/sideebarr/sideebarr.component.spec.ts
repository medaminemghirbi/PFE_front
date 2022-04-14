import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SideebarrComponent } from './sideebarr.component';

describe('SideebarrComponent', () => {
  let component: SideebarrComponent;
  let fixture: ComponentFixture<SideebarrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SideebarrComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SideebarrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
