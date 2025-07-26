import { TestBed } from '@angular/core/testing';

import { HousePointsService } from './house-points.service';

describe('GetHousePointsService', () => {
  let service: HousePointsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HousePointsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
