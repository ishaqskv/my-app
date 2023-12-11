import { TestBed } from '@angular/core/testing';

import { CreateemployeesService } from './createemployees.service';

describe('CreateemployeesService', () => {
  let service: CreateemployeesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CreateemployeesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
