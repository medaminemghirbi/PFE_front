import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SideBarrComponent } from './side-barr.component';

describe('SideBarrComponent', () => {
  let component: SideBarrComponent;
  let fixture: ComponentFixture<SideBarrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SideBarrComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SideBarrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
