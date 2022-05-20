import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiscuterClientComponent } from './discuter-client.component';

describe('DiscuterClientComponent', () => {
  let component: DiscuterClientComponent;
  let fixture: ComponentFixture<DiscuterClientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiscuterClientComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DiscuterClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
