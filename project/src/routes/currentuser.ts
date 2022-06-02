import express from "express";

const router = express.Router();

router.get("/api/users/testing", (req, res) => {
  res.send("hello current user");
});

export {router as currentUserRouter};
