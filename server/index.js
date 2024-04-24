// Employee.js (model)
  // Server.js (entry point, module)
  import express from "express";
  import mongoose from "mongoose";
  import cors from "cors";
  import Employee from "./model/Employee.js";
  
  const app = express();
  app.use(express.json());
  app.use(cors());
  
  mongoose.connect("mongodb://127.0.0.1:27017/employee");
  
 
  app.post("/login", async (req, res) => {
    try {
      const { email, password, phoneNumber } = req.body;
  
      const user = await Employee.findOne({ $or: [{ email }, { phoneNumber }] });
  
      if (!user) return res.json("No record existed");
  
      if (user.password !== password) return res.json("The password is incorrect");
  
      res.json("Success");
    } catch (error) {
      console.error(error);
      res.status(500).json("Internal server error"); 
    }
  });
  
  app.post("/Signup", async (req, res) => {
    try {
      const newEmployee = await Employee.create(req.body);
      res.json(newEmployee);
    } catch (error) {
      // Handle validation or duplicate key errors appropriately
      if (error.name === "ValidationError") {
        const messages = Object.values(error.errors).map(err => err.message);
        return res.status(400).json(messages); // Informative error message
      } else if (error.code === 11000) { // Handle duplicate key errors
        return res.status(400).json("Email or phone number already exists");
      } else {
        console.error(error);
        res.status(500).json("Internal server error"); // Catch-all for other errors
      }
    }
  });
  
  app.listen(3001, () => {
    console.log("Server is running on port 3001");
  });
  
  