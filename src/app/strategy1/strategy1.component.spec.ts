import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Strategy1Component } from './strategy1.component';

describe('Strategy1Component', () => {
  let component: Strategy1Component;
  let fixture: ComponentFixture<Strategy1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Strategy1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Strategy1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
