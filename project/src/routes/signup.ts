import express,{Request,Response} from "express";
import { RequestionvalidationError } from "../errors/requestval";
const { body, validationResult } = require('express-validator');
import { DatabaseconError } from '../errors/databaseconerror';
const router = express.Router();

router.post("/api/users/signup",[
  body('email')
    .isEmail()
    .withMessage('email must be valid'),
  body('password')
    .trim()
    .isLength({min: 4, max:  20})
    .withMessage('password must be b/w 4 to 20 chr')
], (req:Request, res:Response) => {
    const error = validationResult(req);

   if(!error.isEmpty())
   {
    throw new RequestionvalidationError(error.array());
   }
   const { email, password } =req.body;
   // new user 
   console.log('creating a user');
   throw new DatabaseconError();

   res.send({});
});

export {router as signupRouter};
