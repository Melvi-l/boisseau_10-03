import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
import { createFile } from './openCSV';


@Component({
  selector: 'detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  private chart: any;
  private tabs = [
    {
      name: '24h',
      index: 0,
      // content: this.chart
    },
    {
      name: '7d',
      index: 1,
      // content: this.chart
    },
    {
      name: '1M',
      index: 2,
      // content: this.chart
    },
    {
      name: '1Y',
      index: 3,
      // content: this.chart
    }
  ];

  // drawChart(type: string, timelimit: number, aggregate: number): any {
  //   // console.log(this.selectedIndex);
  //   if (this.chart != null) {
  //     this.chart.destroy();
  //   }
  //   // Set global chart config
  //   Chart.defaults.global.defaultFontFamily = '"Helvetica Neue For Number", -apple-system, Roboto, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "Helvetica Neue", Helvetica, Arial, sans-serif';
  //   Chart.defaults.LineWithLine = Chart.defaults.line;
  //   Chart.controllers.LineWithLine = Chart.controllers.line.extend({
  //     draw: function (ease: any) {
  //       Chart.controllers.line.prototype.draw.call(this, ease);

  //       if (this.chart.tooltip._active && this.chart.tooltip._active.length) {
  //         var activePoint = this.chart.tooltip._active[0],
  //           ctx = this.chart.ctx,
  //           x = activePoint.tooltipPosition().x,
  //           topY = this.chart.scales['y-axis-0'].top,
  //           bottomY = this.chart.scales['y-axis-0'].bottom;

  //         // Draw veritical line
  //         ctx.save();
  //         ctx.beginPath();
  //         ctx.moveTo(x, topY);
  //         ctx.lineTo(x, bottomY);
  //         ctx.lineWidth = 2;
  //         ctx.strokeStyle = '#f7f7f7';
  //         ctx.stroke();
  //         ctx.restore();
  //       }
  //     }
  //   });

  //   // Chart params for diffrent types
  //   let priceChart: any, alldates: any, cryptoDates: any[];
  //   let prefix: string;
  //   let canvasID: string;
  //   switch (type) {
  //     case "A": {
  //       canvasID = "canvas-0";
  //       prefix = "histominute";
  //       break;
  //     }
  //     case "B": {
  //       canvasID = "canvas-1";
  //       prefix = "histohour";
  //       break;
  //     }
  //     case "C": {
  //       canvasID = "canvas-2";
  //       prefix = "histohour";
  //       break;
  //     }
  //     case "D": {
  //       canvasID = "canvas-3";
  //       prefix = "histoday";
  //       break;
  //     }
  //   }

  //   this._data.getHitoricalPrices(this.symbol, prefix, timelimit, aggregate)
  //     .subscribe(res => {
  //       //console.log(res.Data);
  //       //console.log(res.Data.length());
  //       priceChart = res['Data'].map(res => res.close);
  //       alldates = res['Data'].map(res => res.time);
  //       //console.log(priceChart);

  //       cryptoDates = [];
  //       alldates.forEach((res: any) => {
  //         let jsdate = new Date(res * 1000);
  //         cryptoDates.push(jsdate.toLocaleTimeString([], { day: 'numeric', month: 'short', hour: '2-digit', minute: '2-digit' }));
  //       });

  //       // Draw new chart
  //       this.chart = new Chart(canvasID, {
  //         type: 'LineWithLine',
  //         data: {
  //           labels: cryptoDates,
  //           datasets: [
  //             {
  //               data: priceChart,
  //               borderColor: '#60acf3',
  //               cubicInterpolationMode: 'monotone',
  //               fill: false
  //             }
  //           ]
  //         },
  //         options: this.chartOptions
  //       });

  //     });

  // }


  constructor() { }

  ngOnInit(): void {
    console.log(createFile("btc_daily_mentions.csv"))
  }

}
