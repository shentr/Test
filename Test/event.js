/**
 * Created by shentr on 2016/10/31.
 */
var events=require('events');
var eventEmitter=new events.EventEmitter();
//console.log(eventEmitter);
eventEmitter.on('connectIsSuccess',function(){         //connectIsSuccess事件绑定
    console.log('Connection Is Successfully!');
});
var conectHandler=function () {
    console.log('connected');
    eventEmitter.emit('connectIsSuccess');             //connectIsSuccess事件发出
}
eventEmitter.on('connection',conectHandler);
eventEmitter.emit('connection');


/*!//Error 必须先绑定，程序由上而下执行
eventEmitter.on('connectIsSuccess',function(){         //connectIsSuccess事件绑定
    console.log('Connection Is Successfully!');
});*/

/*//ECMAScript6
const events=require('events');
// console.log(events);
class conEvents extends events{};
const connection=new conEvents();
connection.on('connection',()=>{
    console.log('connected');
});
connection.emit('connection');*/


