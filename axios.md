1. axios
  · 特点
    基于Promise(能够使用then catch) 异步ajax
    浏览器端/node 服务器端可使用
    支持请求/响应拦截
    请求取消
    请求/响应数据转换
    批量发送请求(Promise.All())

  · 前后台交互过程
    前后应用在浏览器发送http请求(请求报文) 给服务器
    后台服务器接受处理请求，返回浏览器http 响应(响应报文)
    浏览器接受响应，解析响应体/调用监视回调
  
  · 请求报文
    请求行： 请求方式\url
    多个请求头： 一个请求头由name:value ，如Host/Cookie/Content-Type
    请求体

  · 响应报文
    响应行： 响应状态码/对应文本
    多个响应头： 如Content-Type / Set-cookie 头
    响应体

  · post 请求体文本参数
    Content-Type: application/x-www-form-urlencoded;charset=utf-8
      用于键值对参数 参数键值用=连接 参数用&
      eg name=1&age=2

    Content-Type: application/json;charset=utf-8
      用于json 字符串参数
      eg {'name': 1,"age": 2}

    url  2种请求参数
      query
        路由path: /xxx
        请求path：/xxx?name=xx
        获取参数： request.query.name
      
      params 
        路由path: /xxx/:name
        请求path：/xxx/name 值
        获取参数： request.params.name

  · 请求类型
    GET 从服务器获取数据
    POST 向服务器添加数据
    PUT 更新服务器已有数据
    DELETE 删除服务器数据

  · API
    REST API restful
      发送请求CRUD由请求方式决定
      同一个请求路径可进行多个操作
      请求方式GET/POST/PUT/DELETE

    非 REST API restless
      请求方式不决定请求 CRUD
      一个请求路径对应一个操作
      一般只有GET/POST
        测试 json-server 快速搭建 restful 接口

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
  · 返回(return)值为Promise 成功resolve 失败error
  · 能处理多种请求(get/post/put/delete)
  · 函数参数为一个配置对象 {
      url: '',
      method: '',
      params: {},
      data: {},
    }
  · 响应json 数据自动解析为js 对象/数组