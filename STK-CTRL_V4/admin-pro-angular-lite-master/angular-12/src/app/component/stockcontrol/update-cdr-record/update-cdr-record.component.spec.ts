import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateCdrRecordComponent } from './update-cdr-record.component';

describe('UpdateCdrRecordComponent', () => {
  let component: UpdateCdrRecordComponent;
  let fixture: ComponentFixture<UpdateCdrRecordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateCdrRecordComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateCdrRecordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
