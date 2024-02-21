import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import EmployeeModel from "./server/models/Employee.js";

const app = express()
app.use(express.json())
app.use(cors())

const port = 3000;

mongoose.connect("mongodb://127.0.0.1:27017/streamlinebackofficeanalyticsadmin");

app.post("/login", (req,res)=> {
    const {email,password} = req.body;
    EmployeeModel.findOne({email: email})
    .then(user => {
        if(user){
            if(user.password === password){
                res.json("Success")
            }else {
                res.json("Password is incorrect")
            }
        }else {
            res.json("No record exists matching those credentials")
        }
    })
})

app.post('/register', (req,res) => {
    EmployeeModel.create(req.body)
    .then(employees => res.json(employees))
    .catch(err => res.json(err))
})

app.listen(port,() => {
    console.log(`Server is now running at http://localhost:${port}`)
})


