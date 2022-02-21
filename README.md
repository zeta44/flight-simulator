# FlightSimulator
An App designed to simulate a flight simulator procedure:  
* Engine Check
* Fuel Check
* Final Aircraft Check

## Basic Instructions
The simulator can be started by using the control pannel at the bottom screen.

When the simulation runs the complete:
* logs are shown under the Simulation Logs component
* the final simulation code is shown in the Simulation Code component
* the final simulation description is shown in the Code Description component

The user can stop the simulation anytime by clicking the Stop button. The simulation will continue the last started check before the stop button is clicked.

In case the user wants to simulate failures, there are two options on the Configuration Component.
* Force Engine Failure
* Force Fuel Failure

## Final Simulation Codes

There are several internal processing codes used in the `./src/app/sahred/execution-codes.ts`

### S0002 - Simulation Interrupted - The user requested to stop the simulation

This code means that the user clicked the stop button before the simulation is finished

### S0003 - Simulation failure - At least one of the simulations failed

This code means that any Failure option was selected in the Configurations component

### S0004 - Simulation Complete - The aircraft is ready to take off

This means the Simulation is finished without any interruptions or failures.

## Technologies

[Angular CLI](https://github.com/angular/angular-cli) version 13.0.2.

## Requirements

Install NodeJS - V.16+

## Running the App

Run `npm install` to fetch dependencies.

Run `npm run start` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Testing

Run `npm run test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Delivery and Bundling

Run `npm run build` to perform the application build and bundling.

The generated code will be available in the `./dist/flight-simulator` folder.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
