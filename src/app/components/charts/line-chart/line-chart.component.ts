import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgApexchartsModule } from 'ng-apexcharts';
import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexYAxis,
  ApexDataLabels,
  ApexTitleSubtitle,
  ApexStroke,
  ApexPlotOptions,
  ApexTooltip,
  ApexLegend,
  ApexMarkers,
  ApexFill,
} from "ng-apexcharts";

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  yaxis: any;
  dataLabels: ApexDataLabels;
  title: ApexTitleSubtitle;
  colors: string[];
  stroke: ApexStroke;
  plotOptions: ApexPlotOptions;
  tooltip: ApexTooltip;
  legend: ApexLegend;
  markers: ApexMarkers;
  fill: ApexFill;
};
import { ViewChild } from '@angular/core';


@Component({
  selector: 'app-line-chart',
  standalone: true,
  imports: [
    CommonModule,
    NgApexchartsModule
  ],
  template: `
    <div id="chart">
     <!-- <apx-chart
      [series]="chartOptions.series"
      [chart]="chartOptions.chart"
      [title]="chartOptions.title"
      [dataLabels]="chartOptions.dataLabels"
      [colors]="chartOptions.colors"
      [stroke]="chartOptions.stroke"
      [plotOptions]="chartOptions.plotOptions"
      [tooltip]="chartOptions.tooltip"
      [legend]="chartOptions.legend"
      ></apx-chart> -->
       <apx-chart
      [series]="chartOptions.series"
      [chart]="chartOptions.chart"
      [colors]="chartOptions.colors"
      [stroke]="chartOptions.stroke"
      [fill]="chartOptions.fill"
      ></apx-chart>
    </div>
  `,
})
export class LineChartComponent {

  @ViewChild("chart") chart: ChartComponent;
  public chartOptions: Partial<ChartOptions>;

  constructor() {
    this.chartOptions = {
      title: {
        text: "Line Chart"
      },
      chart: {
        height: 350,
        type: "line",
        stacked: false
      },
      dataLabels: {
        enabled: false
      },
      colors: ["#19E6A0", "#199AFB", "#ffcc00"],
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
      series: [
        {
          name: "Series A",
          type: 'line',
          data: [42, 12, 15, 28, 29, 37, 35, 51, 32, 34, 20, 52, 46, 30, 35, 30]
        },
        {
          name: "Series B",
          type: 'line',
          data: [24, 32, 25, 21, 20, 19, 7, 9, 15, 10, 51, 32, 30, 12, 25, 25, 31]
        },
        {
          name: "Series C",
          type: 'column',
          data: [20, 30, 25, 20, 20, 20, 5, 10, 15, 10, 50, 30, 30, 10, 25, 25, 30]
        }
      ],
      stroke: {
        width: [5, 5],
        curve: 'smooth'
      },
      markers: {
        size: 1
      },
      plotOptions: {
        bar: {
          columnWidth: "20%"
        }
      },
      xaxis: {
        categories: [2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016]
      },
      yaxis: [
        {
          axisTicks: {
            show: true
          },
          axisBorder: {
            show: true,
            color: "#FF1654"
          },
          labels: {
            style: {
              colors: "#FF1654"
            }
          },
          title: {
            text: "Series A",
            style: {
              color: "#FF1654"
            }
          }
        },
        {
          opposite: true,
          axisTicks: {
            show: true
          },
          axisBorder: {
            show: true,
            color: "#247BA0"
          },
          labels: {
            style: {
              colors: "#247BA0"
            }
          },
          title: {
            text: "Series B",
            style: {
              color: "#247BA0"
            }
          }
        }
      ],
      tooltip: {
        shared: false,
        intersect: true,
        x: {
          show: false
        }
      },
      legend: {
        horizontalAlign: "left",
        offsetX: 40
      }
    }
    // this.chartOptions = {
    //   series:
    //     [
    //       {
    //         name: "My-series",
    //         data: [44, 55, 13, 43, 22, 200, 13, 69, 84, 77, 55, 30, 65, 120]
    //       },
    //       {
    //         name: "My-series2",
    //         data: [4, 5, 1, 4, 2, 20, 1, 6, 8, 7, 5, 3, 6, 12]
    //       }
    //     ]
    //   ,
    //   chart: {
    //     type: "line"
    //   },
    //   title: {
    //     text: "My First Angular Chart"
    //   }
    // };
  }

}
