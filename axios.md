1. axios

2. ajax
  特殊的http 请求
    区别在浏览器端(服务器视角)
    浏览器发请求(XHR 或fetch) ajax ，其他为非ajax
    
    一般请求：浏览器展示数据(刷新跳转)
    ajax：调用监视的回调并传入数据

3. json-server
        · npm install -g json-server

        · Create a db.json file with some data

            {
            "posts": [
                { "id": 1, "title": "json-server", "author": "typicode" }
            ],
            "comments": [
                { "id": 1, "body": "some comment", "postId": 1 }
            ],
            "profile": { "name": "typicode" }
            }

        · json-server --watch db.json

4. XMLHttpRequest() 创建XHR 对象的构造函数
   status 状态码(200、404等)
   statusText 状态文本
   redayState 标识请求状态的只读属性
     0 初始
     1 open() 之后
     2 send() 之后
     3 请求中
     4 请求完成
   onredaystatecchange 绑定readyState 改变的监听
   responseType 指定响应数据类型  
   response 响应数据
   timeout 超时
   ontimeout 监听超时
   onerror 监听网络错误
   open() 初始化一个请求 参数(method,url[,async])
   send(data) 发送请求
   abort() 中断请求
   getResponseHeader(name) 拿到指定的响应头
   getAllResponseHeader(name) 拿到所有的响应头组成的字符串
   setRequestHeader(name,value) 设置请求头

5. Promise + XHR 封装ajax(简单)
  · 返回值为Promise 成功resolve 失败error
  · 能处理多种请求(get/post/put/delete)
  · 函数参数为一个配置对象 {
      url: '',
      method: '',
      params: {},
      data: {},
    }
  · 响应json 数据自动解析为js 对象/数组