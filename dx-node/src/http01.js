var http = require('http');

var count =0;

http.createServer(function (request, response) {

    // 发送 HTTP 头部 
    // HTTP 状态值: 200 : OK
    // 内容类型: text/plain
    response.writeHead(200, {'Content-Type': 'text/plain'});

    // 发送响应数据 "Hello World"
    response.end('Hello World\n');
    //次数统计
    count++;
    console.log("访问次数：" + count);

    //访问url
    console.log("请求的URL", request.url);

    if(request.url == "/"){
        //参数
        console.log("请求对象", request);
    }

    

}).listen(8888);

// 终端打印如下信息
console.log('Server running at http://127.0.0.1:8888/');