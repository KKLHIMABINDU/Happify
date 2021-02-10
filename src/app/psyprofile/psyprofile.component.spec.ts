import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PsyprofileComponent } from './psyprofile.component';

describe('PsyprofileComponent', () => {
  let component: PsyprofileComponent;
  let fixture: ComponentFixture<PsyprofileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PsyprofileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PsyprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
