var d3 = require("d3");
var fc = require("d3fc");

// create two different series types for rendering the data
const candlestickSeries = fc.seriesSvgCandlestick()
    .bandwidth(3);

const movingAverageSeries = fc.seriesSvgLine()
    .mainValue(d => d.ma)
    .crossValue(d => d.date);


// merge into a single series that is associated with the chart
const mergedSeries = fc.seriesSvgMulti()
    .series([movingAverageSeries, candlestickSeries]);

// adapt the d3 time scale to add discontinuities, so that weekends are removed
const xScale = fc.scaleDiscontinuous(d3.scaleTime())
    .discontinuityProvider(fc.discontinuitySkipWeekends());

const chart = fc.chartCartesian(
    xScale,
    d3.scaleLinear()
)
    .yOrient('left')
    .svgPlotArea(mergedSeries);

// use the extent component to determine the x and y domain
const durationDay = 864e5;
const xExtent = fc.extentDate()
    .accessors([d => d.date])
    // pad by one day on either side of the scale
    .padUnit('domain')
    .pad([durationDay, durationDay]);

// the y extent is based on the high / lowr values, which provide the two extremes
const yExtent = fc.extentLinear()
    .accessors([d => d.high, d => d.low])
    // pad by 10% up and down
    .pad([0.1, 0.1]);

const parseDate = d3.timeParse("%d-%b-%y");

const ma = fc.indicatorMovingAverage()
    .value(d => d.open);

d3.csv('data.csv',
    row => ({
        open: Number(row.Open),
        close: Number(row.Close),
        high: Number(row.High),
        low: Number(row.Low),
        date: parseDate(row.Date)
    })).then(data => {

        // compute the moving average data
        const maData = ma(data);

        // merge into a single series
        const mergedData = data.map((d, i) =>
            Object.assign({}, d, {
                ma: maData[i]
            })
        );

        // set the domain based on the data
        chart.xDomain(xExtent(mergedData))
            .yDomain(yExtent(mergedData))

        // select and render
        d3.select('#chart')
            .datum(mergedData)
            .call(chart);
    });


function bla(color) {
    d3.select("#chart")
        .transition()
        .duration(2000)
        .style("fill",color)
}