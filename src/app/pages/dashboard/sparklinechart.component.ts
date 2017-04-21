import { Component, OnInit, Input } from '@angular/core';
import { nvD3 } from 'ng2-nvd3';
declare let d3: any;

@Component({
    selector: 'nv-sparklinechart',
    template: '<div><nvd3 [options]="options" [data]="data"></nvd3></div>'
})

export class SparkLineChartComponent implements OnInit {
    @Input() options: any;
    @Input() data: any;

    colors: any = {
        line: "#BCE0FC",
        line2: "#F8FBB4"
    };

    ngOnInit() {
        this.options = {
            chart: {
                type: 'lineChart',
                height: 175,
                margin: {
                    top: 20,
                    right: 20,
                    bottom: 40,
                    left: 55
                },
                x: function (d) { return d.x; },
                y: function (d) { return d.y; },
                useInteractiveGuideline: true,
                dispatch: {
                    stateChange: function (e) { console.log("stateChange"); },
                    changeState: function (e) { console.log("changeState"); },
                    tooltipShow: function (e) { console.log("tooltipShow"); },
                    tooltipHide: function (e) { console.log("tooltipHide"); }
                },
                showXAxis: false,
                xAxis: {
                    axisLabel: 'Time (days)'
                },
                yAxis: {
                    axisLabel: 'Device Faults',
                    tickFormat: function (d) {
                        return d3.format('.02f')(d);
                    },
                    axisLabelDistance: -10
                },
                callback: function (chart) {
                    console.log("!!! lineChart callback !!!");
                }
            }
        };

        this.data = this.sineCosine()
    }

    sineCosine() {
        let self = this;
        var sin = [],
            cos = [];

        for (var i = 0; i < 7; i++) {
            let min = i, max = 10;
            sin.push({ x: i, y: Math.floor(Math.random() * (max - min)) + min});
            cos.push({ x: i, y: .5 * Math.floor(Math.random() * (max - min)) + min });
        }

        return [
            {
                values: sin,
                key: 'Mobile',
                color: self.colors.line
            },
            {
                values: cos,
                key: 'Printer',
                color: self.colors.line2
            }
        ];
    }
}