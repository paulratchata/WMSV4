import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExwhstockComponent } from './exwhstock.component';

describe('ExwhstockComponent', () => {
  let component: ExwhstockComponent;
  let fixture: ComponentFixture<ExwhstockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExwhstockComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExwhstockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
