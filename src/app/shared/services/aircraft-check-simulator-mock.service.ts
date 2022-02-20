import { Injectable } from '@angular/core';
import { ExecutionCode, ExecutionCodes } from '..';

@Injectable({
  providedIn: 'root'
})
export class AircraftCheckSimulatorMockService {

  stopRequested = false
  engineChecked = false
  fuelChecked = false

  speedInSeconds = 3



  constructor() { }

  /**
   * I am using observable to avoide cascade of callbacks.
   * this is a rxjs component wide used in Angular applications
   * Observables allows for use of pipes, which are 
   * blocks of sequential executions of functions or rxjs operators
   * @returns 
   */
  public start(forceFailEngine: boolean = false, forceFailFuel: boolean = false): Promise<Array<ExecutionCode>> {
    console.log('Start Executed')

    let _this = this


    return new Promise<Array<ExecutionCode>>(function (resolve, reject) {
      let val = new Array<ExecutionCode>();
      //1
      setTimeout(function () {
        _this.engineCheck(val, forceFailEngine);
        //2
        setTimeout(function () {
          _this.fuelCheck(val, forceFailFuel);
          //3
          setTimeout(function () {
            try {
              _this.finalCheck(val);
              resolve(val);
            } catch (error) {
              reject(error);
            }
          }, _this.speedInSeconds * 1000);
        }, _this.speedInSeconds * 1000);
      }, _this.speedInSeconds * 1000);
    })
  }



  // if the stopRequest happens before 3 seconds
  // there should be an error response saying that engine failed to check
  private engineCheck(val: ExecutionCode[], forceFailEngine: boolean = false) {
    console.log('Executing engineCheck')
    if (!this.stopRequested) {
      if (!forceFailEngine) {
        val.push(ExecutionCodes.E0001)
      }
      else {
        val.push(ExecutionCodes.E0002)
      }
    }
    return val;
  }

  // if the stopRequest happens before 6seconds
  // and the engine check fails, it will return the same value as engineCheck
  // however if the engine is checked and there is a stop request pending
  // the fuel check won't happen
  // otherwise it will succeed
  private fuelCheck(val: ExecutionCode[], forceFailFuel: boolean = false) {
    console.log('Executing fuelCheck')
    if (!this.stopRequested) {
      if (!forceFailFuel) {
        val.push(ExecutionCodes.F0001)
      }
      else {
        val.push(ExecutionCodes.F0002)
      }
    }
    return val;
  }

  finalCheck(val: ExecutionCode[]) {
    console.log('Executing finalCheck')
    if (!this.stopRequested) {
      if (val.filter(e => e.success == false).length == 0)
        val.push(ExecutionCodes.S0001)
    }
    else {
      val.push(ExecutionCodes.S0002)
    }
    this.clear();
    return val;
  }

  public stop(): Promise<string> {
    this.stopRequested = true
    var _result  = new Promise<string>((resolve, reject) => {
      this.stopRequested = true
      resolve('Simulation stop requested')
    })
    return _result
  }

  private clear() {
    this.stopRequested = false
  }
}