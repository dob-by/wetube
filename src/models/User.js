import bcrypt from "bcrypt";
import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  socialOnly: { type: Boolean, default: false },
  username: { type: String, required: true, unique: true },
  password: { type: String },
  name: { type: String, required: true },
  location: String,
});

// hashing password
userSchema.pre("save", async function () {
  console.log("Users password:", this.password);
  // this는 userController에서 create되는 User(await User.create...)
  // user가 입력한 password
  this.password = await bcrypt.hash(this.password, 5);
  console.log("Hashed password", this.password);
});

const User = mongoose.model("User", userSchema);
export default User;
