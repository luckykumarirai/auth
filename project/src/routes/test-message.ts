import express, { Request, Response } from "express";

const router = express.Router();

router.get("/api/users/test-message", (req: Request, res: Response) => {
  res.send({ message: "testing" });
});

export { router as testMessageRouter };
