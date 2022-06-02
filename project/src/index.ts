import express from "express";
import { json } from "body-parser";
import { currentUserRouter } from "./routes/currentuser";
import { signupRouter } from "./routes/signup";
import { signoutRouter } from "./routes/signout";
import { signinRouter } from "./routes/signin";
import { testMessageRouter } from "./routes/test-message";
import { errorHandler } from "./middleware/errorhandling";
const app = express();
app.use(json());

app.use(currentUserRouter);
app.use(signinRouter);
app.use(signupRouter);
app.use(signoutRouter);
app.use(testMessageRouter);
app.use(errorHandler);


app.get("/", (req, res) => {
  res.send("hello lucky!!");
});

app.listen(3000, () => {
  console.log("listen at port 3000!!!!!");
});
