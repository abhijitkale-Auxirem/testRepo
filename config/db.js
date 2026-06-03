// const mongoose = require("mongoose");

// const connectDB = async () => {

//     try {

//         await mongoose.connect(
//             process.env.MONGO_URI
//         );

//         console.log("Database Connected");

//     }
//     catch (error) {

//         console.log(error);

//         process.exit(1);

//     }

// }

// module.exports = connectDB;



 
//  sql 
const mysql = require("mysql2");

const connection = mysql.createConnection({

    host:"localhost",
    user:"root",
    password:"yourpassword",
    database:"testdb"

});

connection.connect((err)=>{

    if(err){

        console.log("DB Error:",err);

    }else{

        console.log("Database Connected");

    }

});

module.exports=connection;