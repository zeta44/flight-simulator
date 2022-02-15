import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  checked!: boolean;
  message!: string
  
 
start(){
  this.message = 'Simulation Started...'

}

stop(){
  this.message = 'Simulation Stopped...'

}

}


