 import { CustomError } from './customerrors';

export class DatabaseconError  extends CustomError {
    statusCode = 500;
    reason = "Error connecting to database";

    constructor() {
        super('error coonectiing to db');

        Object.setPrototypeOf(this, DatabaseconError.prototype);
    }
    serializeErrors() {
        return [
        {
            message: this.reason,
        },
        ];
    }
}