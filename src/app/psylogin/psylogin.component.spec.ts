import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PsyloginComponent } from './psylogin.component';

describe('PsyloginComponent', () => {
  let component: PsyloginComponent;
  let fixture: ComponentFixture<PsyloginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PsyloginComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PsyloginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
