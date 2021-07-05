import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImportcalendarComponent } from './importcalendar.component';

describe('ImportcalendarComponent', () => {
  let component: ImportcalendarComponent;
  let fixture: ComponentFixture<ImportcalendarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImportcalendarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImportcalendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
