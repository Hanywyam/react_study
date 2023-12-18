const express = require("express");
const app = express();
const mongoose = require("mongoose");

const PORT = 8080;
const URL =
  "mongodb+srv://hanyw:1234@cluster0.to8wb9t.mongodb.net/?retryWrites=true&w=majority";

// mongoDB 연결
// dbName: "account" 실제 데이터 저장할 db명. 생략하면 자동 생성됨.
let mydb;
mongoose
  .connect(URL, { dbName: "account" })
  .then(() => {
    console.log("MongoDB에 연결되었습니다.");
    mydb = mongoose.connection.db;
  })
  .catch((err) => {
    console.log("MongoDB 연결 실패: ", err);
  });

// 회원가입
/* 
app.get("/signup", (req, res) => {
  res.render("signup");
}); 
*/
app.post("/signup", async (req, res) => {
  console.log(req.body.userId);
});

app.listen(PORT, () => {
  console.log("8080번 포트에서 실행 중");
});
