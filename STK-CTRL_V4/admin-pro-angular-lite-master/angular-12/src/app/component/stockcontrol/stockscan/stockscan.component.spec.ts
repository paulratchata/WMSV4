import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StockscanComponent } from './stockscan.component';

describe('StockscanComponent', () => {
  let component: StockscanComponent;
  let fixture: ComponentFixture<StockscanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StockscanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StockscanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
