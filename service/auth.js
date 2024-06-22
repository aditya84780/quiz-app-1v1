const jwt = require('jsonwebtoken')
const secretKey = 'secretJwtKeyForDev';

async function setUser(user) {
    try {
        return jwt.sign(user, secretKey);
    } catch (error) {
        console.log(error);
        return null;
    }
}

async function getUser(token) {
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