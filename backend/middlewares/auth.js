const {getUser} = require('../service/auth')
const User = require('../model/user')
async function restrictToLoggedInUserOnly(req, res, next) {
    try {
        const token = req.cookies.token;
        if(!token) {
            res.redirect('/users/login');
            return;
        }
        const username = getUser(token);
        if(!username) {
            res.redirect('/users/login');
            return;
        }
        const user = await User.findOne({username: username});
        const userRole = {
            username: username,
            admin: user.admin,
        }
        req.userRole = userRole;

        next();
    } catch (error) {
        console.log("Login check error: ", error)
        return;
    }
}

module.exports = {
    restrictToLoggedInUserOnly,
}