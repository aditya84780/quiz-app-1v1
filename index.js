const express = require('express');
const cookieParser = require('cookie-parser');
const { mcqLimiter, homeLimiter, userLimiter } = require('./service/rate-limiter')
const connectMongoDb = require('./connection');
const userRoute = require('./routes/user')
const homeRoute = require('./routes/home');
const mcqRoute = require('./routes/mcq');


connectMongoDb("mongodb://127.0.0.1:27017/quiz-app").then(console.log("Connected to MongoDb ...")).catch((err)=>console.log(err));
const PORT = 8080
const app = express();

app.use(express.json());
app.use(cookieParser());

app.use('/', homeLimiter, homeRoute);
app.use('/users', userLimiter, userRoute);
app.use('/mcq', mcqLimiter, mcqRoute);

app.listen(PORT, () => console.log("listening on port 8080 ..."));
