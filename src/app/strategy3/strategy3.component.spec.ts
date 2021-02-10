import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Strategy3Component } from './strategy3.component';

describe('Strategy3Component', () => {
  let component: Strategy3Component;
  let fixture: ComponentFixture<Strategy3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Strategy3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Strategy3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
