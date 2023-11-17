// #6.8
import mongoose from "mongoose";

mongoose.connect(process.env.DB_URL, {
  useCreateIndex: true,
});

const db = mongoose.connection;

const handleOpen = () => console.log("✅ Connected to DB");
const handleError = (error) => console.log("❌ DB Error", error);

db.on("error", handleError); // error 발생시마다 호출
db.once("open", handleOpen); // 이벤트가 한번만 호출
