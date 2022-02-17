import { inject, TestBed, waitForAsync } from '@angular/core/testing';

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
      .subscribe((result: string | any[]) => {
        console.log(result)
        expect(result).toEqual('Failed to check engine')
      });
    //I am simulating a fast click on stop right after the start
    service.stop();
  })));

  //test if fuel as checked
  it('fuel should fail due to stop request', waitForAsync(inject([AircraftCheckSimulatorMockService], (service: AircraftCheckSimulatorMockService) => {
    service.start()
      .subscribe((result: string | any[]) => {
        console.log(result)
        expect(result).toEqual('Failed to check fuel')
      });
    //I am using a timeout to simulate that the user clicked the stop button a few seconds after the engine
    //check was performed
    setTimeout(() => {
      service.stop();
    }, 4000)
  })));

  //tests if all simulation steps were accomplished
  it('all checks must be done', waitForAsync(inject([AircraftCheckSimulatorMockService], (service: AircraftCheckSimulatorMockService) => {
    service.start()
      .subscribe((result: string | any[]) => {
        console.log(result)
        expect(result).toEqual('All Checked')
      });
  })));
});
