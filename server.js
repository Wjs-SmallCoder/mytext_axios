const express = require('express')

const app = express();

app.get('/',function(request,response) {
    response.sendFile(__dirname + '/text/axios_拦截器取消请求.html')
})

app.get('/getProducts1',function(request,response) {
    // 模拟网络延时
    setTimeout(() => {
        response.send([
            {
                name: 1
            }
        ])
    },1000 + (Math.random() * 6))
})

app.get('/getProducts2',function(request,response) {
    setTimeout(() => {
        response.send([
            {
                name: 2
            }
        ])
    },1000 + (Math.random() * 6))
})

app.listen(4000,function(err) {
    if (err) console.log(err)
    else console.log(1)
})
