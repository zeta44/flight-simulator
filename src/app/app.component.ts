import { Component, OnInit } from '@angular/core';
import { delay, interval } from 'rxjs';
import { AircraftCheckSimulatorService, ExecutionCode } from './shared';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  /**
   * Messages propertys
   */
  message_status!: string;
  message_title!: string;
  message_code!: string
  message_description!: string;

  finalExecutionCode!: ExecutionCode;

  /**
   * Buttons propertys
   */
  desableStartButton!: boolean
  desableStopButton!: boolean




  constructor(private serviceCheck: AircraftCheckSimulatorService) { }
  ngOnInit(): void {
    this.desableStartButton = false;
    this.desableStopButton = true;
    this.message_status = ''

  }

  start() {
    this.message_status = ''
    this.desableStartButton = true;
    this.desableStopButton = false;
    this.clear();
    this.message_status += 'Simulation Started... Checking the systems.';
    this.serviceCheck.start().subscribe(val => {
      this.finalExecutionCode = val[val.length - 1]
      for (let i = 0; i < val.length; i++) {
        this.message_status += `\nSimluation Step: Code=${val[i].code}|Description:${val[i].description}|Status:${val[i].success}`;
      }
      if (this.desableStopButton) {
        this.message_status += `\nThe simulation stoped due to user request...`;
      }
      this.message_status += `\nEnd of Simunation`;
      this.desableStartButton = false;
      this.desableStopButton = true;
    })

  }

  stop() {
    try {
      // this.desableStartButton = true;
      this.desableStopButton = true;

      // this.message = '';
      this.message_status += '\nThe user requested to stop the simulation, the sytem needs to wait until the current task finishes...';
      this.serviceCheck.stop();

      // this.desableStartButton = false;
      // this.desableStopButton = true;
    } catch (error) {
      this.message_status = `${error}`
    }
  }

  clear() {
    this.message_status = '';
  }

  finish() {
    this.desableStartButton = false;
    this.desableStopButton = true;
  }
}


