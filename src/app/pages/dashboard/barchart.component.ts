import {Component, OnInit, Input} from '@angular/core';
import {nvD3} from 'ng2-nvd3'
declare let d3: any;

@Component({
  selector: 'nv-chart',
  template: '<div><nvd3 [options]="options" [data]="data"></nvd3></div>'
})

export class BarChartComponent implements OnInit{
  @Input() options: any;
  @Input() data: any;

  colors: any = {
      purple: "#BCC2FC",
      light_blue: "#BCE0FC"
  }

  ngOnInit(){
    this.options = {
      chart: {
        type: 'discreteBarChart',
        height: 175,
        margin : {
          top: 0,
          right: 0,
          bottom: 50,
          left: 0
        },
        color: [this.colors.purple],
        x: function(d){return d.label;},
        y: function(d){return d.value;},
        showValues: false,
        valueFormat: function(d){
          return d3.format(',.4f')(d);
        },
        duration: 500,
        /*xAxis: {
          axisLabel: 'X Axis'
        },
        yAxis: {
          axisLabel: 'Y Axis',
        }*/
      }
    }
    this.data = [
      {
        key: "Cumulative Return",
        values: [
          {
            "label" : "A" ,
            "value" : 29
          } ,
          {
            "label" : "B" ,
            "value" : 9
          } ,
          {
            "label" : "C" ,
            "value" : 32
          } ,
          {
            "label" : "D" ,
            "value" : 40
          } ,
          {
            "label" : "E" ,
            "value" : 59
          } ,
          {
            "label" : "F" ,
            "value" : 18
          } ,
          {
            "label" : "G" ,
            "value" : 24
          } ,
          {
            "label" : "H" ,
            "value" : 6
          }
        ]
      }
    ];
  }

}