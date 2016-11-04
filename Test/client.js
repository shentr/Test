/**
 * Created by shentr on 2016/11/4.
 */
var http=require("http");
var option={
    host:'localhost',
    port:'8888',
    path:'/test.html'
}
var reqCb=function (res) {
    var data='';
    res.on('data',function (fdata) { 
        data+=fdata;
    });
    res.on('end',function () {
        console.log(data);
    });
}

var request=http.request(option,reqCb);
request.end();

