import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PsyregisterComponent } from './psyregister.component';

describe('PsyregisterComponent', () => {
  let component: PsyregisterComponent;
  let fixture: ComponentFixture<PsyregisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PsyregisterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PsyregisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
