import { Injectable } from '@angular/core';
import { delay, map, Observable, of, timeout } from 'rxjs';
import { Codes } from '../shared';

@Injectable({
  providedIn: 'root'
})
export class AircraftCheckSimulatorMockService {

  codes = Codes
  stopRequested = false
  engineChecked = false
  fuelChecked = false

  constructor() { }

  /**
   * I am using observable to avoide cascade of callbacks.
   * this is a rxjs component wide used in Angular applications
   * Observables allows for use of pipes, which are 
   * blocks of sequential executions of functions or rxjs operators
   * @returns 
   */
  public start(): Observable<string> {
    console.log('Start Executed')
    //of can be an instance of http.get
    return of('')
      //delay 3000 sec before engine check starts
      .pipe(delay(3000))
      //engine check
      .pipe(map(val => this.engineCheck(val)))
      .pipe(delay(3000))
      //delay 3000 sec before fuel check starts
      .pipe(map(val => this.fuelCheck(val)))
      .pipe(delay(3000))
      // end of the script
      // if all the checks are true, then 
      // the result will be 'All Checked'
      .pipe(map(val => {
        if (this.engineChecked && this.fuelChecked) {
          this.clear()
          return 'All Checked'
        }
        this.clear()
        return val;
      }))

  }

  

  // if the stopRequest happens before 3 seconds
  // there should be an error response saying that engine failed to check
  private engineCheck(val: string) {
    if (!this.stopRequested) {
      this.engineChecked = true
      return 'Engine Checked'
    }
    return 'Failed to check engine'
  }

  // if the stopRequest happens before 6seconds
  // and the engine check fails, it will return the same value as engineCheck
  // however if the engine is checked and there is a stop request pending
  // the fuel check won't happen
  // otherwise it will succeed
  private fuelCheck(val: string) {
    if (!this.engineChecked) {
      return val
    }
    if (!this.stopRequested) {

      // let valu = (Math.floor(Math.random() * (1 - 0)) + 0);
      // if (valu == 1)
      //   this.fuelChecked = true
      // else
      //   this.fuelChecked = false
      let valu = this.randon();
      this.fuelChecked = valu == 1
      console.log(valu)
      if (this.fuelChecked)
        return 'Fuel Checked'
    }
    return 'Failed to check fuel'
  }

  public stop(): Observable<string> {
    this.stopRequested = true
    return of('Stop Requested')
  }

  private clear() {
    this.stopRequested = false
    this.engineChecked = false
    this.fuelChecked = false
  }

  private randon(){
    return Math.floor(Math.random() * 2);
  }




}
