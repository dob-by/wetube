import express from "express";
import {
  getEdit,
  postEdit,
  logout,
  see,
  startGithubLogin,
  finishGithubLogin,
} from "../controllers/userController";
import { protectorMiddleware, publicOnlyMiddleware } from "../middleware";

const userRouter = express.Router();

userRouter.get(":id", see);
userRouter.get("/logout", protectorMiddleware, logout); //로그인 되어있는 사람만 로그아웃 가능
userRouter.route("/edit").all(protectorMiddleware).get(getEdit).post(postEdit);
userRouter.get("/github/start", publicOnlyMiddleware, startGithubLogin);
userRouter.get("/github/finish", publicOnlyMiddleware, finishGithubLogin);
userRouter.get(":id", see);

export default userRouter;
