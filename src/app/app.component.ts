import { Component, OnInit } from '@angular/core';
import { delay, interval } from 'rxjs';
import { AircraftCheckSimulatorService } from './shared';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  checked!: boolean;
  
  /**
   * Messages propertys
   */
  message_status!: string;
  message_title!: string;
  message_code!: string
  message_description!: string;

  /**
   * Messages propertys
   */
  desableStartButton!: boolean
  desableStopButton!: boolean
  model!: any
  // message!: string



  constructor(private serviceCheck: AircraftCheckSimulatorService) { }
  ngOnInit(): void {
    this.desableStartButton = false;
    this.desableStopButton = true;
  }

  start() {
    this.desableStartButton = true;
    this.desableStopButton = false;
    this.clear();
    this.message_status = 'Simulation Started...';
    this.serviceCheck.start().subscribe(val => {
      this.model = val
      this.message_title = this.model.title
      this.message_code = this.model.code
      this.message_description = this.model.description
      this.message_status = `End of Simunation - ${this.model.msg}`
      this.desableStartButton = false;
      this.desableStopButton = true;
    })




  }

  stop() {
    this.desableStartButton = false;
    this.desableStopButton = true;
    // only perform stop if the simulator is running
    this.clear();
    this.message_status = 'Simulation Stopped...';
    // this.message = '';
    this.serviceCheck.stop()
    delay(2000)
    this.message_status += `${this.model.msg}` 

  }

  clear() {
    this.message_status = '';
    this.message_code = '';
    this.message_title = '';
    this.message_description = '';
  }

}


