import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  username : {
    type : string,
    required : [true, 'username is required'],
    unique : [true, "username must be unique"]
  },
  email : {
    type : string,
    required : [true, 'email is required'],
    unique : [true, "email must be unique"]
  },
  password : {
    type : string,
    required : [true, 'password is required']
  },
  isVerified : {
    type : boolean,
    default : false
  },
  isAdmin : {
    type : boolean,
    default : false
  },
  forgotPasswordToken : {
    type : string,
  },
  forgotPasswordTokenExpiry : {
    type : Date
  },
  verifyToken : {
    type : string
  },
  verifyTokenExpiry : {
    type : Date
  }
},{timestamps: true});

export default mongoose.model("User", userSchema);