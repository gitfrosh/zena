var express = require("express");
import { update } from "./userController";
import { create } from "./userController";

export const userRouter = express.Router();

userRouter.route("/user").post(create);
userRouter.route("/user").put(update);
