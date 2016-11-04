/**
 * Created by shentr on 2016/11/1.
 */
var server=require("./server");
var router=require("./router");

server.start(router.route);
console.log("index start");
