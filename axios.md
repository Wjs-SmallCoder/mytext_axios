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