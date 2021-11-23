const express = require('express')

const app = express();

// 允许跨域（需要插件）
// app.use(cors())
// 解析urlencoded post 请求体参数
app.use(express.urlencoded())
// 解析json 请求体参数 
// app.use(express.json())

const posts = [
    {
        name: "1",
        age: "1"
    },{
        name: "2",
        age: "2"
    }
]

app.get('/',function(request,response) {
    response.sendFile(__dirname + '/text/axios_二次封装.html')
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

app.get('/get',(request,response) => {
    setTimeout(() => {
        response.send(posts)
    },1000 + (Math.random() * 6))
})

app.post('/get',(request,response) => {
    setTimeout(() => {
        const {name,age} = request.body
        const post = {name,age}
        posts.push(post)
        response.send({date: post})
    },1000 + (Math.random() * 6))
})

app.listen(4000,function(err) {
    if (err) console.log(err)
    else console.log(1)
})
