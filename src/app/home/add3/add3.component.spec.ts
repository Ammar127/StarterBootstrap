import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Add3Component } from './add3.component';

describe('Add3Component', () => {
  let component: Add3Component;
  let fixture: ComponentFixture<Add3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Add3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Add3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
