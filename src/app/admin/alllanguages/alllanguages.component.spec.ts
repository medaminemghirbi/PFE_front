import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlllanguagesComponent } from './alllanguages.component';

describe('AlllanguagesComponent', () => {
  let component: AlllanguagesComponent;
  let fixture: ComponentFixture<AlllanguagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlllanguagesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlllanguagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
