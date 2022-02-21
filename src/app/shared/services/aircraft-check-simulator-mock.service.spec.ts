import { inject, TestBed, waitForAsync } from '@angular/core/testing';
import { ExecutionCodes } from '..';

import { AircraftCheckSimulatorMockService } from './aircraft-check-simulator-mock.service';

/*
 * Describes the test scope for the AirCraftCheckSimulatorMockService
 * it uses a call back to perform all the unit tests cases
 */
describe('AircraftCheckSimulatorMockService', () => {
  // it's a function that runs before each test under this scope
  beforeEach(() => {
    TestBed.configureTestingModule({});
    jasmine.DEFAULT_TIMEOUT_INTERVAL = 1000000;
  });


  it('simulation should stop after user request', waitForAsync(inject([AircraftCheckSimulatorMockService], (service: AircraftCheckSimulatorMockService) => {
    service.start()
      .then((result) => {
        let expected = ExecutionCodes.S0002;
        let actual = result[result.length - 1]
        expect(expected).toEqual(actual)
      });
    service.stop();
  })));

  it('simulation should report at least one failure', waitForAsync(inject([AircraftCheckSimulatorMockService], (service: AircraftCheckSimulatorMockService) => {
    service.start(true)
      .then((result) => {
        let expected = ExecutionCodes.S0003;
        let actual = result[result.length - 1]
        expect(expected).toEqual(actual)
      });
  })));

  it('simulation should run until the end', waitForAsync(inject([AircraftCheckSimulatorMockService], (service: AircraftCheckSimulatorMockService) => {
    service.start()
      .then((result) => {
        let expected = ExecutionCodes.S0004;
        let actual = result[result.length - 1]
        expect(expected).toEqual(actual)
      });
  })));
});
