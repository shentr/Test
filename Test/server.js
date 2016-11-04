var http=require("http");
var url=require("url");
var fs=require("fs");

function start(route) {
    function onRequest(req,res) {
        var pathname=url.parse(req.url).pathname;
        route(pathname);
        fs.readFile(pathname.substr(1),function (err,data) {
            if(err){
                console.log(err);
                res.writeHead(404,{"Content-Type":"text/html"})
            }
            else {
                console.log("Server Pathname"+pathname);
                res.writeHead(200,{"Content-Type":"text/html"});
                res.write(data.toString());
            }
            res.end();
        });
    }
    http.createServer(onRequest).listen(8888);
    console.log("Server Start!");
}

exports.start=start;