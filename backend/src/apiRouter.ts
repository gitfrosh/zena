var express = require("express");
import { authRouter } from "./auth/authRouter";
import { userRouter } from "./user/userRouter";

export const apiRouter = express.Router();

apiRouter.use("/auth", authRouter);
apiRouter.use("/user", userRouter);
