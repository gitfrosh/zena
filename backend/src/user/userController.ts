import { updateUser, createUser } from "./userService";
import { NextFunction, Request, Response } from "express";

export async function create(req: Request, res: Response, next: NextFunction) {
  try {
    const { network, message, signature, name, email, avatar } = req.body;

    const user = await createUser({
      name,
      email,
      avatar,
      network,
      message,
      signature,
    });
    console.log(user);
    res.status(200).json({ user });
  } catch (err) {
    next(err);
  }
}

export async function update(req: Request, res: Response, next: NextFunction) {
  try {
    const { network, message, signature, name, email, avatar } = req.body;

    const user = await updateUser({
      name,
      email,
      avatar,
      network,
      message,
      signature,
    });
    console.log(user);
    res.status(200).json({ user });
  } catch (err) {
    next(err);
  }
}
