'use strict';

var http = require('http');
var fs = require('fs');
var port = process.env.PORT || 8000;

var requirejs = require('requirejs');

http.createServer(function (request, response) {
    console.log('request was made: ' + request.url);

    if (request.url == '/' || request.url == '/index.html') {
        response.writeHead(200, {
            'Content-Type': 'text/html'
        });
        var rs = fs.createReadStream('index.html', 'utf8');
        rs.pipe(response);
    }

    if (request.url == '/defrequire.js') {
        response.writeHead(200, {
            'Content-Type': 'text/javascript'
        });
        var rs = fs.createReadStream('defrequire.js', 'utf8');
        rs.pipe(response);
    }

    if (request.url == '/main.js') {
        response.writeHead(200, {
            'Content-Type': 'text/javascript'
        });
        var rs = fs.createReadStream('main.js', 'utf8');
        rs.pipe(response);
    }

    if (request.url == '/favicon.ico') {
        response.writeHead(200, {
            'Content-Type': 'image/x-icon'
        });
        var rs = fs.createReadStream('favicon.ico', 'utf8');
        rs.pipe(response);
    }


    if (request.url == '/node_modules/d3/dist/d3.min.js') {
        response.writeHead(200, {
            'Content-Type': 'text/javascript'
        });
        var rs = fs.createReadStream('node_modules/d3/dist/d3.min.js', 'utf8');
        rs.pipe(response);
    }

    if (request.url == '/node_modules/d3fc/build/d3fc.min.js') {
        response.writeHead(200, {
            'Content-Type': 'text/javascript'
        });
        var rs = fs.createReadStream('node_modules/d3fc/build/d3fc.min.js', 'utf8');
        rs.pipe(response);
    }

    if (request.url == '/node_modules/requirejs/require.js') {
        response.writeHead(200, {
            'Content-Type': 'text/javascript'
        });
        var rs = fs.createReadStream('node_modules/requirejs/require.js', 'utf8');
        rs.pipe(response);
    }


}).listen(port);

console.log("Listening on 8000!")



