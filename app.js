const express = require('express');
const app = express();
const port = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: false }));
app.use(express.static(__dirname + '/public'));
app.use('/css', express.static(__dirname + '/css'));
app.use('/img', express.static(__dirname + '/img'));

app.get('/', (request, response) => {
    response.render('index.html');
});

app.listen(port, (request, response) => {
    console.log('Servidor rodando!')
});