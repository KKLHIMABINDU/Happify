import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Strategy2Component } from './strategy2.component';

describe('Strategy2Component', () => {
  let component: Strategy2Component;
  let fixture: ComponentFixture<Strategy2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Strategy2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Strategy2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
