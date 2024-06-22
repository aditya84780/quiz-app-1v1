const bcrypt = require('bcrypt');
const User = require('../model/user');
const { setUser } = require('../service/auth');
const { default: mongoose } = require('mongoose');

async function handleUserSignup(req, res) {
    try {
        const {username, email, password} = req.body;

        const existingUsername = await User.findOne({ username: username });
        if (existingUsername) {
            return res.status(400).send('Username not available');
        }

        const existingEmail = await User.findOne({ email: email });
        if (existingEmail) {
            return res.status(400).send('An account with that email exists');
        }
        
        const highscore = 0;
        const hash = await bcrypt.hash(password, 13);
        
        const user = await User.create({
            username,
            email,
            password: hash,
            highscore,
        });

        return res.status(201).redirect('/'); 

    } catch (error) {
        console.log("error while signing up", error);
        return res.status(500).send("There was an error signing up");
    }
}

async function handleUserLogin(req, res) {
    try {
        const {email, password} = req.body;
        const user = await User.findOne({email: email});

        if(!user) {
            res.status(401).send("incorrect email");
            return;
        }

        const isValid = await bcrypt.compare(password, user.password);

        if(!isValid) {
            res.status(401).send("incorrect password");
            return;
        }
        const jwtUser = {
            username: user.username,
        };

        res
        .status(200)
        .cookie("token", setUser(jwtUser))
        .redirect('/')

    } catch (error) {
        console.log("Error while logging in", error);
    }
}

module.exports = {
    handleUserSignup,
    handleUserLogin,
}
