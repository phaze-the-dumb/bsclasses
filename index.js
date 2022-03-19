const express = require('express');
const fs = require('fs');
const app = express();

app.use((req, res, next) => {
    try{
        console.log(req.url.replace('/', '').split('?')[0])
        res.header('content-type', 'text/html')
        res.send(fs.readFileSync(req.url.replace('/', '').split('?')[0]))
    } catch(e){
        next();
    }
});

app.listen(80);