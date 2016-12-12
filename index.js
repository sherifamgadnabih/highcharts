var $ = require('jquery');
var highcharts = require('highcharts');
$(document).ready(function () {
    highcharts.chart('container', {
        chart: {
            type: 'gauge',
            alignTicks: false,
            plotBackgroundColor: null,
            plotBackgroundImage: null,
            plotBorderWidth: 0,
            plotShadow: false
        },
        title: {
            text: 'Speedometer with dual axes'
        },
        pane: {
            startAngle: -150,
            endAngle: 150
        },
        yAxis: [{
                min: 0,
                max: 200,
                lineColor: '#339',
                tickColor: '#339',
                minorTickColor: '#339',
                offset: -25,
                lineWidth: 2,
                labels: {
                    distance: -20,
                    rotation: 'auto'
                },
                tickLength: 5,
                minorTickLength: 5,
                endOnTick: false
            }, {
                min: 0,
                max: 124,
                tickPosition: 'outside',
                lineColor: '#933',
                lineWidth: 2,
                minorTickPosition: 'outside',
                tickColor: '#933',
                minorTickColor: '#933',
                tickLength: 5,
                minorTickLength: 5,
                labels: {
                    distance: 12,
                    rotation: 'auto'
                },
                offset: -20,
                endOnTick: false
            }],
    });
});
//# sourceMappingURL=index.js.map