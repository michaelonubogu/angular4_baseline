import {Component, OnInit, Input} from '@angular/core';
import {nvD3} from 'ng2-nvd3'
declare let d3: any;

@Component({
    selector: 'nv-multichart',
    template: '<div><nvd3 [options]="options" [data]="data"></nvd3></div>'
})

export class MultiBarChartComponent implements OnInit{
    @Input() options: any;
    @Input() data: any;

    colors: any = {
        repair: "#FF9E49",
        active: "#5698C6",
        ooc: "#FF5649"
    }

    ngOnInit(){
        this.options = {
            chart: {
                type: 'multiBarChart',
                height: 175,
                margin : {
                    top: 0,
                    right: 0,
                    bottom: 13,
                    left: 0
                },
                color: [this.colors.active, this.colors.repair, this.colors.ooc],
                clipEdge: true,
                duration: 500,
                stacked: true,
                showYAxis: false,
                ShowLabels: true,
                reduceXTicks: false,
                xAxis: {
                    showMaxMin: false
                },
                yAxis: {
                    axisLabel: 'Devices',
                    axisLabelDistance: -58,
                    showLabels: false
                },
                valueFormat: function(d){
                    return d3.format(',.4f')(d);
                },
            }
        };
        this.data = [
            {
                "values":[
                    {
                        "y":6,
                        "x":"A"
                    },
                    {
                        "y":9,
                        "x":"B"
                    },
                    {
                        "y":7,
                        "x":"C"
                    },
                    {
                        "y":12,
                        "x":"D"
                    },
                    {
                        "y":34,
                        "x":"E"
                    },
                    {
                        "y":3,
                        "x":"F"
                    },
                    {
                        "y":13,
                        "x":"G"
                    }
                ],
                "key":"Active"
            },
            {
                "values":[
                    {
                        "y":5,
                        "x":"A"
                    },
                    {
                        "y":10,
                        "x":"B"
                    },
                    {
                        "y":2,
                        "x":"C"
                    },
                    {
                        "y":14,
                        "x":"D"
                    },
                    {
                        "y":9,
                        "x":"E"
                    },
                    {
                        "y":11,
                        "x":"F"
                    },
                    {
                        "y":10,
                        "x":"G"
                    }
                ],
                "key":"Repair"
            },
            {
                "values":[
                    {
                        "y":7,
                        "x":"A"
                    },
                    {
                        "y":5,
                        "x":"B"
                    },
                    {
                        "y":8,
                        "x":"C"
                    },
                    {
                        "y":15,
                        "x":"D"
                    },
                    {
                        "y":13,
                        "x":"E"
                    },
                    {
                        "y":16,
                        "x":"F"
                    },
                    {
                        "y":20,
                        "x":"G"
                    }
                ],
                "key":"OOC"
            }
            
        ];
        console.log(this.data);
    }

}