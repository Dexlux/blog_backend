const express = require('express')
const app = express()
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const port = 3000
const router = require('./src/routes/users')

//把路由容器挂载在app服务中
app.use(router)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})