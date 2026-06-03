const User = require("../models/User");

const bcrypt = require("bcryptjs");

const loginUser = async (req, res) => {

    try {

        const { email, password } = req.body;

        const user = await User.findOne({
            email
        });

        if (!user) {

            return res.status(400).json({
                message: "User not found"
            });

        }

        const passwordMatch =
            await bcrypt.compare(
                password,
                user.password
            );

        if (!passwordMatch) {

            return res.status(400).json({
                message: "Invalid Password"
            });

        }

        res.status(200).json({

            message: "Login Successful",

            user: {
                id: user._id,
                name: user.name,
                email: user.email
            }

        });

    }

    catch (error) {

        res.status(500).json({
            message: error.message
        });

    }

}

module.exports = loginUser;