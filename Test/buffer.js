/**
 * Created by shentr on 2016/10/31.
 */
var buffer=new Buffer.allocUnsafe(33);
buffer.write("'\u00bd + \u00bc = \u00be",0);
bufString=bufString.toString("utf8",0,3);
bufString=bufString.toJSON();
console.log(buffer);

