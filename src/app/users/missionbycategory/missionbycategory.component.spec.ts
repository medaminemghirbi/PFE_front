import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MissionbycategoryComponent } from './missionbycategory.component';

describe('MissionbycategoryComponent', () => {
  let component: MissionbycategoryComponent;
  let fixture: ComponentFixture<MissionbycategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MissionbycategoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MissionbycategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
