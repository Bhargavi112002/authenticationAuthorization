
const express = require('express');

const connect = require('./src/configs/db');

const {signup, signin} = require("./src/controllers/auth.controller");

const userController = require("./src/controllers/user.controller")

const app = express();

app.use(express.json());

app.post("/signup",signup);

app.post("/signin",signin);

app.use("/users",userController);

const start = async() => {
    await connect();
    app.listen(9898,()=>{
        console.log("listhening on the port 9898")
    })

}

module.exports = start;
