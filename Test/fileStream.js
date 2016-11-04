/**
 * Created by shentr on 2016/10/30.
 */
var fs=require("fs");
//同步
/*var data=fs.readFileSync("input.txt");
console.log(data.toString());*/

//异步
fs.readFile("input.txt",(err,data) => {
    if(err) return console.error(err);
    console.log(data.toString());
});
console.log("123");         //care about the position of "123"

//文件输入流
var readStream=fs.createReadStream('input.txt');
readStream.setEncoding('UTF8');
var data='';
readStream.on('data',(chunk) => {
    data+=chunk;
});
readStream.on('end',()=>{
    console.log(data);
})
readStream.on('error',(err)=>{
    console.log(err.stack);
});

