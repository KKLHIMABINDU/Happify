import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UseracceptComponent } from './useraccept.component';

describe('UseracceptComponent', () => {
  let component: UseracceptComponent;
  let fixture: ComponentFixture<UseracceptComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UseracceptComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UseracceptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
