import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrintstockTagComponent } from './printstock-tag.component';

describe('PrintstockTagComponent', () => {
  let component: PrintstockTagComponent;
  let fixture: ComponentFixture<PrintstockTagComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrintstockTagComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrintstockTagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
