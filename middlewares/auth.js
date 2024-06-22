const {getUser} = require('../service/auth')
async function restrictToLoggedInUserOnly(req, res, next) {
    const token = req.cookies.token;
    if(!token) res.redirect('/users/login');

    const user = getUser(token);
    if(!user) res.redirect('/users/login');

    req.user = user;
    next();
}

module.exports = {
    restrictToLoggedInUserOnly,
}