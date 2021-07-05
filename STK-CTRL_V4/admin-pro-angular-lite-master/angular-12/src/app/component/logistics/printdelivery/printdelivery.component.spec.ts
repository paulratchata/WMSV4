import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrintdeliveryComponent } from './printdelivery.component';

describe('PrintdeliveryComponent', () => {
  let component: PrintdeliveryComponent;
  let fixture: ComponentFixture<PrintdeliveryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrintdeliveryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrintdeliveryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
