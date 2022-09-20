/*
 *创建Socket服务器 
*/
// 1、加载net模块
var net = require('net');
// 2、创建net.server对象
var server = net.createServer();
// 3.绑定connetction事件，监听客户的连接
var count = 0;//保存在线人数
server.on('connection', function (socket) {
    // 获取客户端端口号识别不同的客户端
    console.log('客户端的:' + socket.remotePort + "连接成功了。");
    // 利用
    count++;
    console.log("当前在线人数:" + count);
    socket.write('当前在线人数:' + count);
})
server.on('close', function (socket) {
    console.log('客户端的关闭了连接成功了。');
    // 利用
    count--;
})
// 4.调用listen()启动监听
server.listen(3000, '127.0.0.1', function () {
    console.log('http//127.0.0.1:3000 启动Socket服务器');
})
