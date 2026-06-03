const express = require("express");

const dotenv = require("dotenv");

const connectDB =
    require("./config/db");

dotenv.config();

connectDB();

const app = express();

app.use(express.json());

const authRoutes =
    require("./routes/authRoutes");
const loginRoutes =
    require("./routes/loginRoutes");

app.use(
    "/api/auth",
    authRoutes
);
app.use(
    "/api/auth",
    loginRoutes
);
app.listen(
    process.env.PORT,
    () => {

        console.log(
            "Server Running"
        );

    }
);