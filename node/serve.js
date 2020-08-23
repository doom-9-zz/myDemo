const express = require('express')
const app = express()
const port = 3000


app.use(express.urlencoded({ extended: true }))


app.use(express.static(__dirname + '/public'))


app.get('/', (req, res) => {
    console.log(req.query)
    res.send('GET request to the homepage')
})

app.post('/', function (req, res) {
    console.log(req.body)
    res.send('POST request to the homepage')
})


app.listen(port, () => console.log(`Example app listening on port port!`))