const jwt = require('jsonwebtoken')
const secretKey = 'secretJwtKeyForDev';

function setUser(user) {
    try {
        return jwt.sign(JSON.stringify(user), secretKey);
    } catch (error) {
        console.log(error);
        return null;
    }
}

function getUser(token) {
    if(!token) return null;
    try {
        return jwt.verify(token, secretKey)
    } catch (error) {
        console.log(error);
        return null;
    }
}

module.exports = {
    setUser,
    getUser,
}