import { TestBed } from '@angular/core/testing';

import { MovementlogsService } from './movementlogs.service';

describe('MovementlogsService', () => {
  let service: MovementlogsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MovementlogsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
