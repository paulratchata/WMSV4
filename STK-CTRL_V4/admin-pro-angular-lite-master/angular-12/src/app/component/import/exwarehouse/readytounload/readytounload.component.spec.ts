import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadytounloadComponent } from './readytounload.component';

describe('ReadytounloadComponent', () => {
  let component: ReadytounloadComponent;
  let fixture: ComponentFixture<ReadytounloadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReadytounloadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReadytounloadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
