const express = require('express');
const app = express();

app.get('/', (req, res, next) => {
    res.sendFile(__dirname + '/browser.html');
})

app.get('/api/v1/:ver/:header', (req, res, next) => {
    res.sendFile(__dirname + '/data/' + req.params.ver + '/' + req.params.header + '.json')
})

app.get('/api/v1/:ver', (req, res, next) => {
    res.sendFile(__dirname + '/names/' + req.params.ver + '.json')
})

app.listen(80);