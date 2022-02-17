import { TestBed } from '@angular/core/testing';

import { AircraftCheckSimulatorService } from './aircraft-check-simulator.service';

describe('AircraftCheckSimulatorService', () => {
  let service: AircraftCheckSimulatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AircraftCheckSimulatorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
