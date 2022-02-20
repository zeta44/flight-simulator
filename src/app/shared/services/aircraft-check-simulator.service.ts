import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ExecutionCode } from '../execution-codes';
import { AircraftCheckSimulatorMockService } from './aircraft-check-simulator-mock.service';


@Injectable({
  providedIn: 'root'
})
export class AircraftCheckSimulatorService {
  /**
   * I decided to use mock as a separated service due to possible
   * future refactorings
   * @param scriptService to be replaced for a production ready http web service connector
   */
  constructor(private scriptService: AircraftCheckSimulatorMockService) {

  }

  start(): Promise<Array<ExecutionCode>> {
    return this.scriptService.start()
  }

  stop(): Promise<string> {
    return this.scriptService.stop()
  }
}
