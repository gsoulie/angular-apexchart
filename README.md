# Apexchart

## Installation

Documentation : https://apexcharts.com/docs/angular-charts/      
Line chart : https://apexcharts.com/docs/chart-types/line-chart/      

````
npm install apexcharts ng-apexcharts --save 
````

*angular.json*

Ajouter le script suivant dans les noeuds scripts
````
"scripts": [
  "node_modules/apexcharts/dist/apexcharts.min.js"
]
````

*import app.module.ts ou dans les standalone component*

````typescript
import { NgApexchartsModule } from 'ng-apexcharts';

imports: [
	...,
	NgApexchartsModule,
]
````
