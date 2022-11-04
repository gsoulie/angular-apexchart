import { CommonModule } from "@angular/common";
import { ViewChild } from "@angular/core";
import { Component } from "@angular/core";
import { NgApexchartsModule } from 'ng-apexcharts';
import {
  ChartComponent,
  ApexNonAxisChartSeries,
  ApexResponsive,
  ApexChart
} from "ng-apexcharts";

export type ChartOptions = {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  dataLabels: ApexDataLabels;
  responsive: ApexResponsive[];
  labels: any;
};

@Component({
  selector: 'app-donut',
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
      [labels]="chartOptions.labels"
      [responsive]="chartOptions.responsive"
      [dataLabels]="chartOptions.dataLabels"
      ></apx-chart>
    </div>
  `
})

export class DonutComponent {

  @ViewChild("chart") chart: ChartComponent;
  public chartOptions: Partial<ChartOptions>;

  constructor() {
    this.chartOptions = {
      series: [44, 55, 13, 43, 22],
      chart: {
        height: 350,
        type: "donut"
      },
      dataLabels: {
        enabled: true,
        formatter: function (val) {
          return parseFloat(val.toString()).toFixed(2) + "%"
        },
        dropShadow: {
          enabled: false
        }
      },
      labels: ["Team A", "Team B", "Team C", "Team D", "Team E"],
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200
            },
            legend: {
              position: "bottom"
            }
          }
        }
      ]
    };
  }
}
