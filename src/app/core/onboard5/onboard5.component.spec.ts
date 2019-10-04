import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Onboard5Component } from './onboard5.component';

describe('Onboard5Component', () => {
  let component: Onboard5Component;
  let fixture: ComponentFixture<Onboard5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Onboard5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Onboard5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
