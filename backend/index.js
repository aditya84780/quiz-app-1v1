const express = require('express');
const cookieParser = require('cookie-parser');
const { mcqLimiter, homeLimiter, userLimiter } = require('./service/rate-limiter')
const connectMongoDb = require('./connection');
const userRoute = require('./routes/user')
const homeRoute = require('./routes/home');
const mcqRoute = require('./routes/mcq');
const cors = require('cors')

connectMongoDb("mongodb://127.0.0.1:27017/quiz-app").then(console.log("Connected to MongoDb ...")).catch((err)=>console.log(err));
const PORT = 8080

const corsOptions = {
    origin: 'http://localhost:5173', // your frontend server URL
    credentials: true, // to allow credentials (cookies, authorization headers, etc.)
    optionsSuccessStatus: 200
};

const app = express();
app.use(cors(corsOptions));
app.use(express.json());
app.use(cookieParser());

app.use('/',  homeRoute);
app.use('/users',  userRoute);
app.use('/mcq',  mcqRoute);

app.listen(PORT, () => console.log("listening on port 8080 ..."));
