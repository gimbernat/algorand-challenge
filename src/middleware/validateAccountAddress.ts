import { Request, Response, NextFunction } from "express";
import { AccountsService } from "../services/acounts.service";

export function validateAccountAddress(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const address = req.params.address;
  const accountsService = AccountsService.getInstance();

  const isValidAddress = address.length > 57 && !accountsService.accounts.includes(address);

  if (isValidAddress) {
    next();
  } else {
    res.status(400).send("Account already Exists or is Invalid");
  }
}