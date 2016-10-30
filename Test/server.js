var http=require("http");
var express=require("express");

var server=http.createServer((request,response) => {

    response.writeHead(200,{'Content-Type':'text-plain'});
    response.end('Hello World\n');
});

server.listen(8888);

console.log('Server running at http://127.0.0.1:8888/');