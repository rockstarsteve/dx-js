/**
 * 统计在线客户端的人数
 */
// 加载net模块
var net = require('net')
// 创建createConnection的对象，并与服务器建立连接
var client = net.createConnection({
    host: '127.0.0.1',
    port: 3000
});
// 绑定connet事件，建立连接成功触发
client.on("connect", function () {
    console.log('与服务器连接成功。');
});
// 绑定data事件，接受服务器发送过的数据
client.on('data', function (data) {
     console.log(data.toString());
});
