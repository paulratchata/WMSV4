import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FumigationtableComponent } from './fumigationtable.component';

describe('FumigationtableComponent', () => {
  let component: FumigationtableComponent;
  let fixture: ComponentFixture<FumigationtableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FumigationtableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FumigationtableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
