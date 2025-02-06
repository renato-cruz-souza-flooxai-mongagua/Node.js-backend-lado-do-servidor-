const https = require(`http`)

let server = https.createServer((req, res)=>{
    console.log('URL:', req.url)
    console.log('METHOD',req.method)

    switch (req.url){
        case '/':

        res.statusCode = 200;
        res.setHeader('content-type', 'text/html')
        res.end('<h1>Olá</h1>');

        break;

        case '/Users':

        res.statusCode = 200;
        res.setHeader('content-type', 'application/json')
        res.end(JSON.stringify({
            users: [{
                name:'Hcode',
                email:'contato@hcode.com.br',
                id:1
            }]
        }));

        break;

    }
})

server.listen(3000,'127.0.0.1',()=>{
    console.log('servidor rodando')
}) 