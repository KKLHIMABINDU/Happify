import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Strategy4Component } from './strategy4.component';

describe('Strategy4Component', () => {
  let component: Strategy4Component;
  let fixture: ComponentFixture<Strategy4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Strategy4Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Strategy4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
