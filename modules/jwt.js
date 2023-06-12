var jwt = require('jsonwebtoken');

const createJWT = (user) => {
    var token = jwt.sign({
        user : user
    }, process.env.JWT_SECRET, { expiresIn: '1h'});
    return token
}

const checkJWT = (token) => {
    var check = false;
    try {
        check = jwt.verify(token, process.env.JWT_SECRET);
    }
    catch (err) {
        check = false;
    }
    return check;
}

module.exports = { createJWT : createJWT, checkJWT: checkJWT}