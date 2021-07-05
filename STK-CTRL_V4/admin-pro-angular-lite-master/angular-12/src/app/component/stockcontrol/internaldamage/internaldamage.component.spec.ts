import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InternaldamageComponent } from './internaldamage.component';

describe('InternaldamageComponent', () => {
  let component: InternaldamageComponent;
  let fixture: ComponentFixture<InternaldamageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InternaldamageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InternaldamageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
