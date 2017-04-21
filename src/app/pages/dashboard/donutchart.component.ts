import { Component, OnInit, Input } from '@angular/core';
import { nvD3 } from 'ng2-nvd3'
declare let d3: any;

@Component({
    selector: 'nv-donutchart',
    template: '<div><nvd3 [options]="options" [data]="data"></nvd3></div>'
})

export class DonutChartComponent implements OnInit {
    @Input() options: any;
    @Input() data: any;

    colors: any = {
        repair: "#FF9E49",
        active: "#5698C6",
        ooc: "#FF5649"
    }

    ngOnInit() {
        this.options = {
            chart: {
                type: 'pieChart',
                height: 250,
                donut: true,
                donutRatio: 0.35,
                labelType: "percent",
                x: function (d) { return d.label },
                y: function (d) { return d.value },
                showLabels: true,
                duration: 500,
                legend: {
                    margin: {
                        top: 5,
                        right: 0,
                        bottom: 0,
                        left: 0
                    }
                }
            }
        }

        this.data = [
            {
                "label": "Active",
                "value": 31,
                "color": this.colors.active

            },
            {
                "label": "Repair",
                "value": 13,
                "color": this.colors.repair
            },
            {
                "label": "OOC",
                "value": 8,
                "color": this.colors.ooc
            }
        ];
    }

}