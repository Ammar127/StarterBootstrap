import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Onboard2Component } from './onboard2.component';

describe('Onboard2Component', () => {
  let component: Onboard2Component;
  let fixture: ComponentFixture<Onboard2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Onboard2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Onboard2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
