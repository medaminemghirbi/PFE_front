import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddLanguagesComponent } from './add-languages.component';

describe('AddLanguagesComponent', () => {
  let component: AddLanguagesComponent;
  let fixture: ComponentFixture<AddLanguagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddLanguagesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddLanguagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
