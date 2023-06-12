const express = require("express");
const app = express.Router();
// const { createJWT, checkJWT } = require('../modules/jwt');

app.use(express.json());
app.get('/create', function(req, res, next){
    res.send('create JWT Token');
});

app.get('/verify/:token', function(req, res, next){
    res.send('check JWT Token');
});
// app.get('/create', function(req, res, next){
//     let token = createJWT({ name: "John", role: 'admin'});
//     res.json({token:token});
// });

// app.get('/verify/:token', function(req, res, next){
//     let check = checkJWT(req.params.token);
//     res.json({check:check});
// });
 

module.exports = app;