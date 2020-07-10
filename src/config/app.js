const express = require('express')
const app = express()
const port = 4004
const bodyParse = require('body-parser')
const allowCors = require('./cors')


app.use(bodyParse.urlencoded({ extended: true}))
app.use(bodyParse.json())
app.use(allowCors)




app.listen(port, ()=>{
    console.log('rodando...')
})

module.exports = app