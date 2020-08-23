const express = require('express')
const app = express()
const port = 3001
const db = require('./mongoose')
const demoModel = require('./model')

db(() => {
    app.get('/', (req, res) => {
        res.setHeader('Access-Control-Allow-Origin', '*')
        res.send('Hello World!')
        demoModel.create({ stu_id: '111' });
    })
    app.listen(port, () => console.log(`Example app listening on port port!`))
}, (err) => {
    console.log(err)
})
