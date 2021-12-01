"use strict";
// src/app.ts
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const app = express();
// get
app.get("/", (req, res) => {
    res.send("hello express");
});
// 3010 포트로 서버 실행
app.listen(process.env.PORT || 3010, () => {
    console.log("실행중");
});
