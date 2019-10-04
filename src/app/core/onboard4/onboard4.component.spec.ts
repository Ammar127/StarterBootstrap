import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Onboard4Component } from './onboard4.component';

describe('Onboard4Component', () => {
  let component: Onboard4Component;
  let fixture: ComponentFixture<Onboard4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Onboard4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Onboard4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
