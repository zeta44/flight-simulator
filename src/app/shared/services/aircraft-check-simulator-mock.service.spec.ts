import { inject, TestBed, waitForAsync } from '@angular/core/testing';
import { ExecutionCodes } from '..';

import { AircraftCheckSimulatorMockService } from './aircraft-check-simulator-mock.service';

//describes the test scope for the AirCraftCheckSimulatorMockService
//it uses a call back to perform all the unit tests cases
describe('AircraftCheckSimulatorMockService', () => {
  // it's a function that runs before each test under this scope
  beforeEach(() => {
    TestBed.configureTestingModule({});
    jasmine.DEFAULT_TIMEOUT_INTERVAL = 1000000;
  });

  // in this case I am testing an Observable, therefore an async block.
  //for this reason I am using the function waitForAsync, which requires an inject function with the class I want to inject
  //and a callback with a the service instance as a parameter 
  it('engine should fail due to stop request', waitForAsync(inject([AircraftCheckSimulatorMockService], (service: AircraftCheckSimulatorMockService) => {
    service.start()
      //observables expects clients aka subscribers to catch the values 
      //of the execution
      .subscribe((result) => {
        let expected = ExecutionCodes.S0002;
        let actual = result[result.length - 1]
        expect(expected).toEqual(actual)
      });
    //I am simulating a fast click on stop right after the start
    service.stop();
  })));
});
