import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersnavbarComponent } from './usersnavbar.component';

describe('UsersnavbarComponent', () => {
  let component: UsersnavbarComponent;
  let fixture: ComponentFixture<UsersnavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsersnavbarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersnavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
