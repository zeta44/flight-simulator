import { Injectable } from '@angular/core';
import { concat, delay, from, map, Observable, of, timeout, Subject, BehaviorSubject, concatMap, ObservableInput } from 'rxjs';
import { ExecutionCode, ExecutionCodes } from '..';

@Injectable({
  providedIn: 'root'
})
export class AircraftCheckSimulatorMockService {

  stopRequested = false
  engineChecked = false
  fuelChecked = false

  private executionCodes: ExecutionCode[] = [];
  private obsCodes: BehaviorSubject<ExecutionCode[]> = new BehaviorSubject(this.executionCodes);

  constructor() { }

  /**
   * I am using observable to avoide cascade of callbacks.
   * this is a rxjs component wide used in Angular applications
   * Observables allows for use of pipes, which are 
   * blocks of sequential executions of functions or rxjs operators
   * @returns 
   */
  public start(forceFailEngine: boolean = false, forceFailFuel: boolean = false): Observable<Array<ExecutionCode>> {
    console.log('Start Executed')
    return this.obsCodes.asObservable()
      //delay 3000 sec before engine check starts
      .pipe(
        delay(3000),
        map(val => this.engineCheck(val, forceFailEngine)),
        delay(3000),
        map(val => this.fuelCheck(val, forceFailFuel)),
        delay(3000),
        map(val => this.finalCheck(val))
      )
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

  public stop(): Observable<string> {
    this.stopRequested = true
    return of('Stop Requested')
  }

  private clear() {
    this.stopRequested = false
    this.executionCodes = []
    this.obsCodes = new BehaviorSubject(this.executionCodes)
  }
}