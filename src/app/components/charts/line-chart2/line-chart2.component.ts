import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgApexchartsModule } from 'ng-apexcharts';
import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexYAxis,
  ApexTitleSubtitle,
  ApexForecastDataPoints
} from "ng-apexcharts";

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  yaxis: ApexYAxis;
  dataLabels: ApexDataLabels;
  title: ApexTitleSubtitle;
  colors: string[];
  stroke: ApexStroke;
  plotOptions: ApexPlotOptions;
  tooltip: ApexTooltip;
  legend: ApexLegend;
  markers: ApexMarkers;
  fill: ApexFill;
  forecastDataPoints: ApexForecastDataPoints;
};
import { ViewChild } from '@angular/core';


@Component({
  selector: 'app-line2-chart',
  standalone: true,
  imports: [
    CommonModule,
    NgApexchartsModule
  ],
  template: `
    <div id="chart">
       <apx-chart
      [series]="chartOptions.series"
      [chart]="chartOptions.chart"
      [forecastDataPoints]="chartOptions.forecastDataPoints"
      [stroke]="chartOptions.stroke"
      [xaxis]="chartOptions.xaxis"
      [title]="chartOptions.title"
      [fill]="chartOptions.fill"
      [yaxis]="chartOptions.yaxis"
      ></apx-chart>
    </div>
  `,
})
export class LineChart2Component {

  @ViewChild("chart") chart: ChartComponent;
  public chartOptions: Partial<ChartOptions>;

  constructor() {
    this.chartOptions = {
      series: [{
        name: 'Sales',
        data: [4, 3, 10, 9, 29, 19, 22, 9, 12, 7, 19, 5, 13, 9, 17, 2, 7, 5]
      }],
      chart: {
        height: 350,
        type: 'line',
      },
      forecastDataPoints: {
        count: 7,
        dashArray: 7
      },
      stroke: {
        width: 5,
        curve: 'smooth'
      },
      xaxis: {
        type: 'datetime',
        categories: ['1/11/2000', '2/11/2000', '3/11/2000', '4/11/2000', '5/11/2000', '6/11/2000', '7/11/2000', '8/11/2000', '9/11/2000', '10/11/2000', '11/11/2000', '12/11/2000', '1/11/2001', '2/11/2001', '3/11/2001', '4/11/2001', '5/11/2001', '6/11/2001'],
        tickAmount: 10,
        labels: {
          formatter: function (value, timestamp, opts) {
            return opts.dateFormatter(new Date(timestamp), 'dd MMM')
          }
        }
      },
      title: {
        text: 'Forecast',
        align: 'left',
        style: {
          fontSize: "16px",
          color: '#666'
        }
      },
      fill: {
        type: 'gradient',
        gradient: {
          shade: 'dark',
          gradientToColors: ['#FDD835'],
          shadeIntensity: 1,
          type: 'horizontal',
          opacityFrom: 1,
          opacityTo: 1,
          stops: [0, 100, 100, 100]
        },
      },
      yaxis: {
        min: -10,
        max: 40
      }
    };
  }

}