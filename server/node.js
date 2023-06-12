const express = require("express");
// const indexRouter = require('../routes/index');
// const usersRouter = require('../routes/users');
const authRouter = require('../routes/auth');

const PORT = process.env.PORT || 7000;

const app = express();

app.use(express.json());
// app.use('/', indexRouter);
// app.use('/users', usersRouter);
app.use('/auth',authRouter);

app.get('/auth', function(req, res, next){
  res.json(authRouter);
});
// app.get('/api', function(req, res, next){
//     res.json({
//       'msg': 'hello world'
//     })
// });


app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});

module.exports = app;