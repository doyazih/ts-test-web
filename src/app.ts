// src/app.ts

import express = require("express");
const app: express.Application = express();

// get
app.get("/", (req: express.Request, res: express.Response) => {
  res.send("hello express");
});

// 3010 포트로 서버 실행
app.listen(process.env.PORT || 3010, () => {
  console.log("실행중");
});
