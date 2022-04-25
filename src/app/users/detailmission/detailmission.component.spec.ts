import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailmissionComponent } from './detailmission.component';

describe('DetailmissionComponent', () => {
  let component: DetailmissionComponent;
  let fixture: ComponentFixture<DetailmissionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailmissionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailmissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
