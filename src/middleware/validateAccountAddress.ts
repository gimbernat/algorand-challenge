import { Request, Response, NextFunction } from "express";
import { AccountsService } from "../services/acounts.service";

export function validateAccountAddress(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const address = req.params.address;
  const isValidAddress = address.length > 57

  if (isValidAddress) {
    next();
  } else {
    res.status(400).send("Invalid account address");
  }
}
