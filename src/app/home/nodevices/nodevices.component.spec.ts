import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NodevicesComponent } from './nodevices.component';

describe('NodevicesComponent', () => {
  let component: NodevicesComponent;
  let fixture: ComponentFixture<NodevicesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NodevicesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NodevicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
