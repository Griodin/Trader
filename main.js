﻿define(function (require) {
    var d3 = require("d3");
});
define(function (require) {
    var fc = require("d3fc");
});
define(function (require) {
    var Symbol = require("es6-symbol");
});


var data = fc.randomFinancial()(50);
alert(data)
var yExtent = fc.extentLinear()
    .accessors([
        function (d) { return d.high; },
        function (d) { return d.low; }
    ]);

var xExtent = fc.extentDate()
    .accessors([function (d) { return d.date; }]);

var gridlines = fc.annotationSvgGridline();
var candlestick = fc.seriesSvgCandlestick();
var multi = fc.seriesSvgMulti()
    .series([gridlines, candlestick]);

var chart = fc.chartCartesian(
    fc.scaleDiscontinuous(d3.scaleTime()),
    d3.scaleLinear()
)
    .yDomain(yExtent(data))
    .xDomain(xExtent(data))
    .svgPlotArea(multi);

d3.select('#chart')
    .datum(data)
        .call(chart);

