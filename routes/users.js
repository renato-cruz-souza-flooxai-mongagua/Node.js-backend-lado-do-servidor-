let express = require(`express`);
let routes = express.Router();

routes.get('/Users', (req, res)=>{

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

routes.get('/users/admin', (req, res)=>{

    res.statusCode = 200;
    res.setHeader('content-type', 'application/json')
    res.json({
        users: []

});
});

module.exports = routes;