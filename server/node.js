const express = require("express");
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv').config();

const PORT = process.env.PORT || 7000;

const app = express();

app.use(express.json());


const user = 
  {
   name: "John", 
   role: "admin"
  }

const createJWT = (user) => {
    var token = jwt.sign({
        username : user.name,
        role: user.role
    }, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '30sec'});
    return token
}

const checkJWT = (token) => {
    var check = false;
      console.log('ceci est un token', token);
      const header = token.headers.authorization;
      //const bearer = token.split(' ')[1];
      // if(token == null) return res.status(401);
      //bearer = token.replace('Bearer ', '');
      //bearer = token.replace(/^Bearer\s/, '');
      console.log(bearer, header);
      if(bearer !=null){ 
        return jwt.verify(bearer, process.env.ACCESS_TOKEN_SECRET)
      }
      //     if(err) return res.status(403);
      //     req.user = decode.name;
      //     next()
      //   });
      else {
        return check;
      }
    //return check;
}
// app.post('/create', function(req, res, next){
//   res.send('create JWT Token');
// });

// app.post('/verify/:token', function(req, res, next){
//   res.send('check JWT Token');
// });

function authenticateJWT(req, res, next) {
    let bearer = req.query.param1.replace('Bearer ', '');
    if(bearer == null) return res.status(401);
    jwt.verify(bearer, process.env.ACCESS_TOKEN_SECRET, function(err, user){
        if(err) return res.status(403);
        req.user = user;
        next();
    });
}
app.post('/create',  function(req, res, next){
    let token = createJWT(user);
    req.body = token;
    res.redirect(`/verify/:token?param1=`+req.body);
});

app.get('/verify/:token', authenticateJWT, (req, res) => {
    console.log(req.user.role);
    res.json(req.user);
    //let verify = checkJWT(req.params.token);
    //res.send(verify);
    //return req.params.token;
    //var check = jwt.verify(req.params.token, process.env.ACCESS_TOKEN_SECRET)
  //res.json(req.user);
  //return check;
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});

module.exports = app;