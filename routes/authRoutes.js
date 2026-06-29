const express =
    require("express");

const router =
    express.Router();

const {
    signupUser,
    getUserProfile
} = require(
    "../controllers/authController"
);

const authMiddleware = require("../middleware/authMiddleware");

router.post(
    "/signup",
    signupUser
);

router.get(
    "/profile",
    authMiddleware,
    getUserProfile
);

module.exports =
    router;