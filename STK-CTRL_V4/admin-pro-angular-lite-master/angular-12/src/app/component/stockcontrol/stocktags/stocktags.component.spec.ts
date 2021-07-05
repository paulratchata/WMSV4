import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StocktagsComponent } from './stocktags.component';

describe('StocktagsComponent', () => {
  let component: StocktagsComponent;
  let fixture: ComponentFixture<StocktagsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StocktagsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StocktagsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
