import { Request, Response, NextFunction } from "express";
import { AccountsService } from "../services/accounts.service";

export function validateAccountAddress(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const address = req.params.address;

  const accountsService = AccountsService.getInstance();
  console.log("address ", address, accountsService.accounts.includes(address))
  console.log("accounts ", accountsService.accounts)
  const isValidAddress = address.length > 57 && !accountsService.accounts.includes(address);

  if (isValidAddress) {
    next();
  } else {
    res.status(400).send("Account already Exists or is Invalid");
  }
}