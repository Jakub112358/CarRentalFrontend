## Car Rental - Frontend

Backend part of the application: https://github.com/Jakub112358/CarRentalBackend

### Developer:
- Jakub Szymański, 

### Running application:
- Run backend application: [instructions](https://github.com/Jakub112358/CarRentalBackend/blob/dev/README.md#running-application)
- Follow the instructions to run [Angular application](README.md#angular-project-info)

### General app description:
The main purpose of the application is to solve the problem of managing car rental company that has branch offices in various cities. 
The solution will be to create a personalized web application.

### Technical description: 

**Backend:**
Spring Boot REST application. More info in Backend Part [Readme](https://github.com/Jakub112358/CarRentalBackend/blob/dev/README.md)

**Frontend:**
Angular application with PrimeNG library.

### App features: 

**As Admin:**
- login to the system
- configuring company details
- managing clients (full CRUD operations)
- managing employees (full CRUD operations)
- managing cars (full CRUD operations)
- managing price lists (full CRUD operations)
- managing offices (full CRUD operations)


 **As Client:**
- register an account
- login to the system
- making reservations
  - setting specification of searching car that could include any of following:
     - list of desired makes,
     - list of desired models,
     - maximum mileage
     - minimum year of manufacture
     - list of desired body types
     - list of desired colors,
  - selecting pick-up and return dates 
  - selecting pick-up and return offices,

  - based on the given data application would return the list of available cars with calculated prices(taking into account interfering with other reservations, car specification, place of car pick-up and return)
  - selecting one of the proposals and making reservation that automatically generates company income.
- cancelling reservations
  - cancelling reservation auto-generate company expense 
  - based on the date of cancellation and the date of rental beginning app cashback may be reduced by late-cancelling extra charge

**As Employee**

- login to the system
- reading and updating pick-ups and returns
  - changing pick up/return status
  - charging additional fees
  - adding comments

### Version control: 
- system: GIT
- main branches:
  - main – release app version
  - dev – stable and tested version of application
  
# Angular project info:

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.1.6.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
