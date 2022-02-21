import { Component, OnInit } from '@angular/core';
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

  forceEngineFailure: boolean = false
  forceFuelFailure: boolean = false



  finalExecutionCode: ExecutionCode = {
    code: '',
    title: '',
    description: '',
    success: true
  };

  /**
   * Buttons properties
   */
  desableStartButton!: boolean
  desableStopButton!: boolean




  constructor(private serviceCheck: AircraftCheckSimulatorService) { }
  ngOnInit(): void {

    this.desableStartButton = false;
    this.desableStopButton = true;
    this.message_status = '';
    this.finalExecutionCode.code = '';
    this.finalExecutionCode.description = '';
    this.finalExecutionCode.success = true;
    this.finalExecutionCode.title = '';

  }

  start() {
    this.message_status = ''
    this.desableStartButton = true;
    this.desableStopButton = false;
    this.clear();
    this.message_status += 'Simulation Started... Checking the systems.';
    this.serviceCheck.start(this.forceEngineFailure, this.forceFuelFailure)
      .then(val => {
        this.finalExecutionCode = val[val.length - 1]
        for (let i = 0; i < val.length; i++) {
          this.message_status += `\n=> Simluation Step: Code=${val[i].code}|Description:${val[i].description}|Status:${val[i].success}`;
        }

        if (this.desableStopButton) {
          this.message_status += `\nThe simulation stoped due to user request...`;
        }
        this.message_status += `\nEnd of Simunation`;

        this.message_title = this.finalExecutionCode.title;
        this.message_code = this.finalExecutionCode.code;
        this.message_description = this.finalExecutionCode.description;
        this.finish()
      })

    
  }

  stop() {
    this.desableStopButton = true;
    this.desableStartButton = true;

    this.message_status += '\nThe user requested to stop the simulation, the sytem needs to wait until the current task finishes...';
    this.serviceCheck.stop()
    .then((result)=>{
      this.message_status += result
    });
  }

  clear() {
    this.message_status = '';
    this.message_title = '';
    this.message_code = '';
    this.message_description = '';
  }

  finish() {
    this.desableStartButton = false;
    this.desableStopButton = true;
  }

  forceEngineFailureChange() {
    this.forceEngineFailure = !this.forceEngineFailure
    console.log(`Engine Failure Setings = ${this.forceEngineFailure}`)
  }

  forceFuelFailureChange() {
    this.forceFuelFailure = !this.forceFuelFailure
    console.log(`Fuel Failure Setings = ${this.forceFuelFailure}`)
  }
}


