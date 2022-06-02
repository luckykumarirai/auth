import { ValidationError } from 'express-validator';
import { CustomError } from './customerrors';


export class RequestionvalidationError extends CustomError{
    statusCode = 400;
    constructor(public errors: ValidationError[]) {
      super('invalid request parameters');
  
      // Only because we are extending a built in class
      Object.setPrototypeOf(this, RequestionvalidationError.prototype);
    }
    serializeErrors() {
      return this.errors.map((err) => {
        return { message: err.msg, field: err.param };
      });
    }
}