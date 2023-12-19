const express = require("express");
const app = express();
const mongoose = require("mongoose");
const sha = require("sha256");
const cors = require("cors");
const session = require("express-session");

// 세션 설정(주로 앞쪽에 작성)
app.use(
  session({
    secret: "sniawmdlkawm1234kr4kr", // 세션 아이디 암호화를 위한 재료값 (타자 막 아무거나 작성했음)
    resave: false, // 세션을 접속할 때마다 새로운 세션 식별자(sid)의 발급 여부를 결정. 일반적으로 false로 설정.
    saveUninitialized: true, //세션을 사용하기 전까지 세션 식별자를 발급하지 않도록 함.
  })
);

// sha256 알고리즘
app.use(cors());
app.use(express.json());

const PORT = 8080;
const URL =
  "mongodb+srv://hanyw:1234@cluster0.to8wb9t.mongodb.net/?retryWrites=true&w=majority";

// mongoDB 연결
// dbName: "db1" 실제 데이터 저장할 db명. 생략하면 자동 생성됨.
let mydb;
mongoose
  .connect(URL, { dbName: "db1" })
  .then(() => {
    console.log("MongoDB에 연결되었습니다.");
    mydb = mongoose.connection.db;
  })
  .catch((err) => {
    console.log("MongoDB 연결 실패: ", err);
  });

// Post 스키마 정의
const postSchema = new mongoose.Schema({
  id: String,
  title: String,
  content: String,
  writer: String,
  wdate: { type: Date, default: Date.now },
});

const Post = mongoose.madel("Post", postSchema);

// 회원가입
/* 
app.get("/signup", (req, res) => {
  res.render("signup");
}); 
*/
app.post("/signup", async (req, res) => {
  console.log(req.body.userId);
  console.log(req.body.userPw);
  console.log(req.body.userGroup);
  console.log(req.body.userEmail);

  try {
    await mydb.collection("account").insertOne({
      userId: req.body.userId,
      // sha('hello');
      //"2cf24dba5fb0a30e26e83b2ac5b9e29e1b161e5c1fa7425e73043362938b9824"
      userPw: sha(req.body.userPw),
      userGroup: req.body.userGroup,
      userEmail: req.body.userEmail,
    });
    console.log("회원가입 성공");
    res.json({ message: "회원가입 성공" });
  } catch (err) {
    console.log("회원가입 에러: ", err);
    res.send({ error: err });
    res.status(500).send({ error: err }); //500번대 서버문제 오류인거 같을 때 오류 메세지 확인
  }
});

// 로그인 1:유지
const checkUserSession = (req, res) => {
  if (req.session.user) {
    console.log("세션 유지");
    res.json({ user: req.session.user });
  } else {
    res.json({ user: null });
  }
};

app.get("/login", checkUserSession);
app.get("/", checkUserSession);

// 로그인 2:값 확인
app.post("/login", async (req, res) => {
  const { userId, userPw } = req.body;
  console.log("id:", userId);
  console.log(`pw: ${userPw}`);

  try {
    const result = await mydb.collection("account").findOne({ userId });
    if (!result) {
      return res.json({ err: "아이디를 찾을 수 없습니다." });
    } else if (result.userPw && result.userPw === sha(userPw)) {
      req.session.user = { userId, userPw };
      console.log("새로운 로그인");
      res.json({ user: req.session.user });
    } else {
      return res.json({ err: "비밀번호가 틀렸습니다." });
    }
  } catch (err) {
    console.log("로그인 에러: ", err);
    res.status(500).json({ err: "서버 오류" });
  }
});

// 로그아웃
app.get("/logout", (req, res) => {
  console.log("로그아웃");
  req.session.destroy();

  res.json({ user: null });
});

// 게시판
// posts
app.get("/posts", async (req, res) => {
  try {
    const page = Numnber(req.query.page) || 1;
    const perPage = 10;
    const skip = (page - 1) * perPage;

    // .find() 문서 탐색
    // .sort() 정렬. 매개변수 없으면 기본 정렬. -1 역순 정렬.
    // .skip() 건너 뛸 검색 수. 매개변수 없으면 건너띄지 않음.
    // .limit() 반환 문서 최대 값.
    // .lean() mongoose 사용 시 작성. mongoose 문서 -> js 객체 변환.
    const posts = await Post.find().sort().skip(skip).limit(perPage).lean();
    const totalPosts = await Post.countDocuments(); // mongoose 자동반환
    const totalPages = Math.ceil(totalPosts / perPage);

    res.json({ docs: posts, totalPages });
  } catch (err) {
    console.log("posts err:", err);
    res.status(500).send("posts 서버 오류");
  }
});

app.listen(PORT, () => {
  console.log("8080번 포트에서 실행 중");
});
