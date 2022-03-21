import {Request, Response, NextFunction} from 'express';

export const errorHandling = (err: Error ,req: Request, res: Response, next: NextFunction) => { 
    console.log("An error occurred", err);

    res.status(400).send({
        message: err.message
    })
}