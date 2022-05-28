const express = require('express')
const userRouter = require('./router/user')
const postRouter = require('./router/post')

const _port = 8000

const app = express()

app.use(express.json())
app.use('/api/user', userRouter)
app.use('/api/post', postRouter)

app.listen(_port, () => console.log('server has been started :)'))