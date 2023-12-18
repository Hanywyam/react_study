const express = require("express");
const app = express();
const path = require("path"); // 절대 경로로 사용 가능.
const axios = require("axios");
const PORT = 8080;

// MongoClient 방식
const MongoClient = require("mongodb").MongoClient;
const URL =
  "mongodb+srv://hanyw:1234@cluster0.to8wb9t.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(URL);
const dbName = "db1";

async function run() {
  try {
    await client.connect();
    const db = client.db(dbName);

    const col = db.collection("people");
    let personDocument = {
      // 필요한 값을 넣어서 사용 할 수 있음.
      name: { first: "Alan", last: "Turing" },
      birth: new Date(1912, 5, 23), // May 23, 1912
      death: new Date(1954, 5, 7), // May 7, 1954
      contribs: ["Turing machine", "Turing test", "Turingery"],
      views: 1250000,
    };
    // insertOne 사용 권장
    const p = await col.insertOne(personDocument);
    // Find and return the document
    const filter = { "name.last": "Turing" };
    const document = await col.findOne(filter);
    console.log("Document found:\n" + JSON.stringify(document));
  } catch (err) {
    console.log(err.stack);
  } finally {
    await client.close();
  }
}
run().catch(console.dir);

app.use(express.static(path.join(__dirname, "public")));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

// 외부 API에서 포스트 가져오기
const getPosts = async () => {
  try {
    const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
    return res.data;
  } catch (err) {
    console.log("오류발생 : ", err);
    return [];
  }
};

app.get("/", (req, res) => {
  res.render("home");
});

app.get("/list", async (req, res) => {
  const posts = await getPosts();
  res.render("list", { name: "axios 사용하여 외부 API 호출", posts });
});

app.get("*", (req, res) => {
  res.render("notFoundPage", { notFound: "페이지" });
});

app.listen(PORT, () => {
  console.log("8080번으로 서버실행");
});
