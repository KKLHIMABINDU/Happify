import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PsyhomeComponent } from './psyhome.component';

describe('PsyhomeComponent', () => {
  let component: PsyhomeComponent;
  let fixture: ComponentFixture<PsyhomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PsyhomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PsyhomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
