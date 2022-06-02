import express from "express";

const router = express.Router();

router.post("/api/users/sigin", (req, res) => {
  res.send("hello i m signin page");
});

export {router as signinRouter};
