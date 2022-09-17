var express = require("express");
import { verify, request } from "./authController";

export const authRouter = express.Router();

authRouter.route("/request-message").post(request);
authRouter.route("/sign-message").post(verify);
