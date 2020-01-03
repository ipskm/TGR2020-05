const port = 8080;
var express = require('express')
var app = express()

app.get("/",(req, res) => {
    res.send('Hello world, forn express')
})
app.listen(port, () => {
    console.log(`Listen at port ${port}!`)
})