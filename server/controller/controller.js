const bcrypt = require('bcrypt');
const User = require('../model/schema');
const jwt = require('jsonwebtoken');
console.log("in controller")
// controller for register
exports.registerUser = async (req, res) => {
    try {

        // validate request
        if (!req.body) {
            res.status(406).json({ err: "You have to fill the registration form" });
            return
        }

        let { email, password, passwordCheck, username } = req.body

        if (!email || !password || !passwordCheck)
            return res.status(406).json({ err: "Not all fields have been entered" })
        if (password.length < 8)
            return res.status(406).json({ err: "The Password need to be at least 8 characters long" })
        if (password !== passwordCheck)
            res.status(406).json({ err: "Password must be same for verification" });

        // hashing password
        const hash = await bcrypt.hashSync(password, 10)

        // using document structure
        const newUser = new User({
            email,
            password: hash,
            username
        })

        newUser
            .save(newUser)
            .then(register => {
                res.json(register)
            })
            .catch(error => {
                res.status(406).json({ err: error.message || "Something went wrong while registration" })
            })
    } catch (error) {
        res.status(500).json({ err: error.message || "Error while registration" })
    }
}

// controller for login
exports.login = async (req, res) => {
    try {

        // validate request
        if (!req.body) {
            res.status(406).json({ err: "You have to fill the email and password" })
            return;
        }

        // get user data
        const { email, password } = req.body
        console.log(req.body)
        // validation
        if (!email || !password)
            return res.status(406).json({ err: "Not all fields have been entered" })

        const user = await User.findOne({ email });
        // console.log(user);
        if (!user)
            return res.status(406).json({ err: "No account with this email." })

        // compare the password
        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) return res.status(406).json({ err: "Invalid Credentials" });

        // create jwt token
        const token = jwt.sign({ id: user._id }, "RawatRock@0012")
        // console.log(token);
        res.json({ token, username: user.username, email: user.email })

    } catch (error) {
        res.status(500).json({ err: error.message || "Error while Login" })
    }
};


