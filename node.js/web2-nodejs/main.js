var http = require('http');
var fs= require('fs');
var url = require('url')

var app = http.createServer(function(request, response) {
    var _url = request.url;
    var queryData = url.parse(_url, true).query;
    console.log(queryData.id)
    if (request.url == '/') {
        _url='/index.html';
    }
    if (request.url == '/favicon.ico') {
        return response.writeHead(404);
    }
    response.writeHead(200);
    response.end(queryData.id);
});
app.listen(3000)