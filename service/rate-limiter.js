const { rateLimit } = require('express-rate-limit');

const mcqLimiter = rateLimit({
    windowMs: 60 * 1000,
    limit: 30,
    message: "Too many requests, Try again after a while",
})

const userLimiter = rateLimit({
    windowMs: 60 * 1000,
    limit: 5,
    message: "Too many requests, Try again after a while",
})

const homeLimiter = rateLimit({
    windowMs: 60 * 1000,
    limit: 5,
    message: "Too many requests, Try again after a while",
})

module.exports = {
    mcqLimiter,
    userLimiter,
    homeLimiter,
}