import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AircraftCheckSimulatorService } from './services';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  checked!: boolean;
  message_status!: string;
  message_description!: string;
  message_code!: string
  desableStartButton!: boolean
  desableStopButton!: boolean
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
      this.message_code = val
      console.log(this.message_code)
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

  }

  clear(){
    this.message_status = '';
    this.message_code = '';
  }

}


