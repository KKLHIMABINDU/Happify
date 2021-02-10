import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultingformComponent } from './consultingform.component';

describe('ConsultingformComponent', () => {
  let component: ConsultingformComponent;
  let fixture: ComponentFixture<ConsultingformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultingformComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultingformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
