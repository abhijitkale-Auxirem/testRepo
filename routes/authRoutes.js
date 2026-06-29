const express =
    require("express");

const router =
    express.Router();

const {
    signupUser,
    getUserProfile,
    signupAdmin
} = require(
    "../controllers/authController"
);

const authMiddleware = require("../middleware/authMiddleware");

router.post(
    "/signup",
    signupUser
);

router.post(
    "/signup-admin",
    signupAdmin
);

router.get(
    "/profile",
    authMiddleware,
    getUserProfile
);

module.exports =
    router;