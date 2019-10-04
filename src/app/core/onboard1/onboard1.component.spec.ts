import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Onboard1Component } from './onboard1.component';

describe('Onboard1Component', () => {
  let component: Onboard1Component;
  let fixture: ComponentFixture<Onboard1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Onboard1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Onboard1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
