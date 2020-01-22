'use strict';
require('dotenv').config();

var http = require('http');
var fs = require('fs');
var path = require('path')
var port = process.env.PORT || 8000;

var browserify = require('browserify');
var watchify = require('watchify');

process.on('uncaughtException', function (err) {
    console.log('Caught exception: ', err);
});



//var b = browserify({
//    entries: ['bundle.js'],
//    cache: {},
//    packageCache: {}
//}).bundle()
//    .on('error', console.error)
//    .pipe(fs.createWriteStream('distBundle.js'))
//    .

//console.log(b);
//b.on('update', bundle);
//bundle;

//function bundle() {
//    b.bundle()
//        .on('error', console.error)
//        .pipe(fs.createWriteStream('distBundle.js'))
//}


http.createServer(function (request, response) {
    console.log('request was made: ' + request.url);
    //console.log('path: ' + request.url)
    console.log('ext: ' + path.extname(request.url))

    switch (path.extname(request.url)) {
        case '.ico':
            response.writeHead(200, { 'Content-Type': 'image/x-icon' });
            break;
        case '.html':
            response.writeHead(200, { 'Content-Type': 'text/html' });
            break;
        case '.csv':
            response.writeHead(200, { 'Content-Type': 'text/csv' });
            break;
        case '.js':
            response.writeHead(200, { 'Content-Type': 'text/javascript' });
            break;
        case '.json':
            response.writeHead(200, { 'Content-Type': 'application/json' });
            break;
        case '.css':
            response.writeHead(200, { 'Content-Type': 'text/css' });
            break;
        case '.png':
            response.writeHead(200, { 'Content-Type': 'image/png' });
            break;
        case '.jpg':
            response.writeHead(200, { 'Content-Type': 'image/jpeg' });
            break;
        case '.wav':
            response.writeHead(200, { 'Content-Type': 'audio/wav' });
            break;
        case '.mp3':
            response.writeHead(200, { 'Content-Type': 'audio/mpeg' });
            break;
        case '.svg':
            response.writeHead(200, { 'Content-Type': 'image/svg+xml' });
            break;
        case '.pdf':
            response.writeHead(200, { 'Content-Type': 'application/pdf' });
            break;
        case '.doc':
            response.writeHead(200, { 'Content-Type': 'application/msword' });
            break;
        case '.eot':
            response.writeHead(200, { 'Content-Type': 'appliaction/vnd.ms-fontobject' });
            break;
        case '.ttf':
            response.writeHead(200, { 'Content-Type': 'aplication/font-sfnt' });
            break;
        default:
            response.writeHead(404, { 'Content-Type': '' });
            break;
    }
    
    switch (request.url) {
        //My Files
        case '/':
            response.writeHead(200, { 'Content-Type': 'text/html' });
            var rs = fs.createReadStream('index.html', 'utf8');
            rs.pipe(response);
            break;
        case '/index.html':
            var rs = fs.createReadStream('index.html', 'utf8');
            rs.pipe(response);
            break;
        case '/main.js':
            var rs = fs.createReadStream('main.js', 'utf8');
            rs.pipe(response);
            break;
        case '/data.csv':
            var rs = fs.createReadStream('data.csv', 'utf8');
            rs.pipe(response);
            break;
        case '/distChart.js':
            browserify("chart.js")
                .bundle(function (err, buf) {
                    if (err) {
                        console.log(err.message);
                        return;
                    }
                    fs.writeFileSync("distChart.js", buf);
                    var rs = fs.createReadStream('distChart.js', 'utf8');
                    rs.pipe(response);
                });
            //var rs = fs.createReadStream('chart.js', 'utf8');
            //rs.pipe(response);
            break;
        case '/favicon.ico':
            var rs = fs.createReadStream('favicon.ico', 'utf8');
            rs.pipe(response);
            break;
        case '/bundle.js':
            var rs = fs.createReadStream('bundle.js', 'utf8');
            rs.pipe(response);
            break;
        case '/distBundle.js':
            browserify("bundle.js")
                .bundle(function (err, buf) {
                    if (err) {
                        console.log(err.message);
                        return;
                    }
                    fs.writeFileSync("distBundle.js", buf);
                    var rs = fs.createReadStream('distBundle.js', 'utf8');
                    rs.pipe(response);
                });
            break;
        //System Files
        case '/node_modules/d3/dist/d3.min.js':
            var rs = fs.createReadStream('node_modules/d3/dist/d3.min.js', 'utf8');
            rs.pipe(response);
            break;
        case '/node_modules/d3fc/build/d3fc.min.js':
            var rs = fs.createReadStream('node_modules/d3fc/build/d3fc.min.js', 'utf8');
            rs.pipe(response);
            break;
        case '/node_modules/requirejs/require.js':
            var rs = fs.createReadStream('node_modules/requirejs/require.js', 'utf8');
            rs.pipe(response);
            break;
        case '/d3-array.js':
            var rs = fs.createReadStream('d3-array.js', 'utf8');
            rs.pipe(response);
            break;
        case '/d3-scale.js':
            var rs = fs.createReadStream('d3-scale.js', 'utf8');
            rs.pipe(response);
            break;
        case '/d3-time.js':
            var rs = fs.createReadStream('d3-time.js', 'utf8');
            rs.pipe(response);
            break;
        case '/d3-random.js':
            var rs = fs.createReadStream('d3-random.js', 'utf8');
            rs.pipe(response);
            break;
        case '/d3-fetch.js':
            var rs = fs.createReadStream('d3-fetch.js', 'utf8');
            rs.pipe(response);
            break;
        default:
            var rs = fs.createReadStream('index.html', 'utf8');
            rs.pipe(response);
            break;
    }


}).listen(port);

console.log("Listening on 8000!")



