import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientnavbarComponent } from './clientnavbar.component';

describe('ClientnavbarComponent', () => {
  let component: ClientnavbarComponent;
  let fixture: ComponentFixture<ClientnavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientnavbarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientnavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
