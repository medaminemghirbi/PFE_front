import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FindProjectComponent } from './find-project.component';

describe('FindProjectComponent', () => {
  let component: FindProjectComponent;
  let fixture: ComponentFixture<FindProjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FindProjectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FindProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
