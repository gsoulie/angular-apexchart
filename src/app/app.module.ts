import { LineChart2Component } from './components/charts/line-chart2/line-chart2.component';
import { LineChartComponent } from './components/charts/line-chart/line-chart.component';
import { BarchartComponent } from './components/charts/barchart.component';
import { DonutComponent } from './components/charts/donut.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import * as ApexCharts from 'apexcharts';
import { NgApexchartsModule } from 'ng-apexcharts';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    DonutComponent,
    BarchartComponent,
    LineChartComponent,
    LineChart2Component,
    BrowserModule,
    NgApexchartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
