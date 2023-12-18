const express = require("express");
const app = express();
const path = require("path");
const PORT = 8080;
const userData = require("./users.json");
const axios = require("axios");

// 한 개의 디렉토리 연결시
// app.use(express.static("public"));
// 여러 디렉토리 연결시
// app.use(express.static("css"));
// app.use(express.static("js"));

// 절대 경로로 설정
app.use(express.static(path.join(__dirname, "public")));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

// 외부 API
const getPosts = async () => {
  const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
  return res.data;
};

app.get("/", (req, res) => {
  // res.send("<h1>express 연습</h1>");
  // res.send("<h2>연습</h2>"); 요청은 하나만 받을 수 있기 때문에 안됨
  // res.sendFile(__dirname + "/index.html")
  res.render("home");
});

app.get("/list", async (req, res) => {
  const posts = await getPosts();
  res.render("list", { ...posts });
});

// page1
app.get("/page1", (req, res) => {
  // res.send("<h2>page1</h2>");
  const num = Math.floor(Math.random() * 10) + 1;
  res.render("page1", { num });
});

app.get("/coffee", (req, res) => {
  // 커피 종류를 배열로 만들고 ejs에 변수로 넘겨 li에 순차적으로 출력
  const coffee = ["아메리카노", "라떼", "모카", "바닐라라떼", "에스프레소"];
  res.render("coffee", { coffee });
});

app.get("/page2/:title/:itemId", (req, res) => {
  const { title, itemId } = req.params;
  res.send(`<h2>여기는 ${title} 페이지의 ${itemId}입니다.</h2>`);
});

// title 동적으로 사용할 수 있는 매개변수
app.get("/page2/:title", (req, res) => {
  const { title } = req.params;
  res.send(`<h2>여기는 ${title} 페이지입니다.</h2>`);
});

// page2
app.get("/page2", (req, res) => {
  res.send("<h2>page2</h2>");
});

// ?key=value&key=value
app.get("/search", (req, res) => {
  const { q, type } = req.query;
  if (!q) {
    res.send("<h3>찾을 수가 없습니다</h3>");
  }
  res.send(`<h2>검색 결과: q=${q}, type=${type}</h2>`);
});

app.get("/page3/:userId", (req, res) => {
  const { userId } = req.params;
  const data = userData[userId - 1];
  // console.log(data);
  res.render("users", { ...data });
});

// app.use((req, res) => {
// res.status(404).render("notFoundPage", { notFound: "페이지" });
//   res.render("notFoundPage", { notFound: "페이지" });
// });

app.get("*", (req, res) => {
  // res.send("페이지를 찾을 수 없습니다");
  // const notFound = "페이지를 찾을 수 없습니다";
  res.render("notFoundPage", { notFound: "페이지" });
});

app.listen(PORT, () => {
  console.log("8080포트로 서버 실행");
});
