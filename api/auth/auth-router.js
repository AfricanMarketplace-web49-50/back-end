const router = require('express').Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const secrets = require('../../config/secrets');

const Users = require('../users/users-model');

router.post('/register', validateUser, (req, res) => {
    const {username, password} = req.body;
    const credentials = {username, password};

    if (credentials) {
        credentials.password = bcrypt.hashSync(credentials.password, 8);

        Users.add(credentials)
            .then(user => {
                res.status(201).json({data: user})
            })
            .catch(error => {
                console.log({error})
                res.status(500).json({message: error.message})
            })
    } else {
        res.status(400).json({message: "Please provide username and password, password must be alphanumeric"})
    }
});

router.post('/login', validateUser, (req, res) => {
    const {username, password} = req.body;

    if ({username, password}) {
        Users.findBy({username})
            .then(([user]) => {
                if (user && bcrypt.compareSync(password, user.password)) {
                    const token = createToken(user);
                    res.status(200).json({message: "Welcome to api", token: token})
                } else {
                    res.status(401).json({message: "Invalid Credentials"})
                }
            })
            .catch(error => {
                console.log({error})
                res.status(500).json({message: error.message})
            })
    } else {
        res.status(400).json({message: "Please provide username and password, password must be alphanumeric"})
    }
});

router.get('/', (req, res) => {
    Users.find()
        .then(users => {
            res.status(200).json({data: users})
        })
        .catch(error => {
            console.log({error})
            res.status(500).json({message: error.message})
        })
})

function validateUser(req, res, next) {
    const {username, password} = req.body;

    if (Object.entries(req.body).length === 0) {
        res.status(400).json({message: "No User Data"})
    } else if (!username || !password) {
        res.status(400).json({message: "Username and Password are required fields"})
    } else {
        next();
    }
}

function createToken(user) {
    const payload = {
        sub: user.id,
        username: user.username
    }

    const secret = process.env.JWT_SECRET || "secret";

    const options = {
        expiresIn: '1D'
    }

    return jwt.sign(payload, secret, options);
}

module.exports = router





