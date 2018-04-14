const express = require('express');
const ReactSSR = require('react-dom/server');
const fs = require('fs');
const path = require('path');
const serverEnter = require('../dist/server-enter').default;

const app = express();
const template = fs.readFileSync(path.join(__dirname, '../dist/index.html'), 'utf8');

app.use('/public', express.static(path.join(__dirname, '../dist')))
app.get("*", function(req, res) {
    const appString = ReactSSR.renderToString(serverEnter);
    let result = template.replace('<app></app>', appString)
    res.send(result);
})

app.listen(8888, function() {
    console.log('服务器已经启动')
})