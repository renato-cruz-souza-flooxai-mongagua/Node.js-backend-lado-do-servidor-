const express = require(`express`)

let app = express();

app.get('/', (req, res)=>{

    res.statusCode = 200;
        res.setHeader('content-type', 'text/html')
        res.end('<h1>Olá</h1>');

});

app.get('/Users', (req, res)=>{

    res.statusCode = 200;
    res.setHeader('content-type', 'application/json')
    res.json({
        users: [{
            name:'Hcode',
            email:'contato@hcode.com.br',
            id:1
        }]
    });

});

app.listen(3000,'127.0.0.1',()=>{
console.log('servidor rodando')
}) 