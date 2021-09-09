const express = require('express');

const path = require('path');

let app = express();

const publiPath = path.resolve(__dirname,'./public')

app.use(express.static(publiPath));

/*console.log(path.join(__dirname, './views/index.html'));*/

app.listen(process.env.PORT || 3000, function () {
    console.log('Esto fue exitoso');
})

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, 'views/index.html'));
});

app.get('/register', function(req, res) {
    res.sendFile(path.join(__dirname, 'views/register.html'));
});

app.get('/login', function(req, res) {
    res.sendFile(path.join(__dirname, 'views/login.html'));
});

