import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';

import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ModalModule } from 'ngx-bootstrap/modal';
import { ToggleButtonComponent } from './toggle-button';
import { FormsModule } from '@angular/forms';
import { AircraftCheckSimulatorMockService } from './services';

@NgModule({
  declarations: [
    AppComponent,
    ToggleButtonComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BsDropdownModule.forRoot(),
    TooltipModule.forRoot(),
    ModalModule.forRoot()
  ],
  providers: [
    AircraftCheckSimulatorMockService,
    AircraftCheckSimulatorMockService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
