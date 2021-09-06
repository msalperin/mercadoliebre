const express = require('express');

const path = require('path');

let app = express();

const publiPath = path.resolve(__dirname,'./public')

app.use(express.static(publiPath));

app.listen(3030, () => {
    console.log('Esto fue exitoso');
})

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, './views/index.html'));
});

app.get('/register', function(req, res) {
    res.sendFile(path.join(__dirname, './views/register.html'));
});