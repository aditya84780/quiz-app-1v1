const express = require('express');
const connectMongoDb = require('./connection');
const userRoute = require('./routes/user')
const homeRoute = require('./routes/home');
const cookieParser = require('cookie-parser');

connectMongoDb("mongodb://127.0.0.1:27017/quiz-app").then(console.log("Connected to MongoDb ...")).catch((err)=>console.log(err));
const PORT = 8080
const app = express();

app.use(express.json());
app.use(cookieParser());

app.use('/', homeRoute);
app.use('/users', userRoute);

app.listen(PORT, () => console.log("listening on port 8080 ..."));
