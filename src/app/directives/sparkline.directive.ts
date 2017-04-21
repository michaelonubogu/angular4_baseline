import { Directive, ElementRef, Input, Renderer } from '@angular/core';
//declare const $: any;

@Directive({ selector: '[sparklineChart]' })

export class SparklineDirective {

    constructor(private el: ElementRef, private render: Renderer) {
        //this.render.setElementStyle(this.el.nativeElement, 'color', 'red');
        /*$(this.el.nativeElement).sparkline([345, 404, 305, 455, 378, 567, 586, 685, 458, 742, 565], {
            type: 'line',
            width: '100%',
            height: '40',
            spotRadius: 4,
            lineWidth: 1,
            lineColor: '#ffffff',
            fillColor: false,
            minSpotColor: false,
            maxSpotColor: false,
            highlightLineColor: '#ffffff',
            highlightSpotColor: '#ffffff',
            tooltipChartTitle: 'Page Views',
            spotColor: '#ffffff',
            valueSpots: {
                '0:': '#ffffff'
            }
        });*/
    }
}