import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StockonhandComponent } from './stockonhand.component';

describe('StockonhandComponent', () => {
  let component: StockonhandComponent;
  let fixture: ComponentFixture<StockonhandComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StockonhandComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StockonhandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
