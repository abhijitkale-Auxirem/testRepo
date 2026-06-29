const User = require("../models/User");

const bcrypt = require("bcryptjs");

const signupUser = async (req, res) => {

    try {

        const { name, email, password } = req.body;

        if (!name ||!email ||!password
        ) {

            return res.status(400).json({

                message: "All fields required"

            });

        }

        const existingUser =await User.findOne({email});

        if (existingUser) {

            return res.status(400).json({

                message: "User already exists"

            });

        }

        const hashedPassword =
            await bcrypt.hash(
                password,
                10
            );

        const newUser =
            await User.create({

                name,
                email,
                password: hashedPassword

            });

        res.status(201).json({

            message: "Signup Successful",

            user: newUser

        });

    }
    catch (error) {

        res.status(500).json({

            message: error.message

        });

    }

}

const getUserProfile = async (req, res) => {

    try {

        const user = await User.findById(req.user.id).select("-password");

        if (!user) {

            return res.status(404).json({
                message: "User not found"
            });

        }

        res.status(200).json({
            message: "Profile retrieved successfully",
            user
        });

    }
    catch (error) {

        res.status(500).json({
            message: error.message
        });

    }

}

const signupAdmin = async (req, res) => {

    try {

        const { name, email, password } = req.body;

        if (!name || !email || !password) {

            return res.status(400).json({
                message: "All fields required"
            });

        }

        const existingUser = await User.findOne({ email });

        if (existingUser) {

            return res.status(400).json({
                message: "User already exists"
            });

        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const newAdmin = await User.create({
            name,
            email,
            password: hashedPassword,
            role: "admin"
        });

        res.status(201).json({
            message: "Admin Signup Successful",
            user: newAdmin
        });

    }
    catch (error) {

        res.status(500).json({
            message: error.message
        });

    }

}

module.exports = {
    signupUser,
    getUserProfile,
    signupAdmin
};