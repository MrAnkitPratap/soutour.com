import mongoose from "mongoose";

const EmployeeSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  phoneNumber: String,
});

const EmployeeModel = mongoose.model("employees", EmployeeSchema);

export default EmployeeModel;