import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Onboard3Component } from './onboard3.component';

describe('Onboard3Component', () => {
  let component: Onboard3Component;
  let fixture: ComponentFixture<Onboard3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Onboard3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Onboard3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
