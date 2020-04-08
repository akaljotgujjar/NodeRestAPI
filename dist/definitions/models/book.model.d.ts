import { Request, Response, NextFunction } from 'express';
export declare class Book {
    _model: any;
    constructor(norm: any);
    getAllBooks(model: any): (req: Request<import("../../../../../../Users/akaljotgujjar/Desktop/ExamAPI/node_modules/@types/express-serve-static-core").ParamsDictionary>, res: Response<any>, next: NextFunction) => Promise<void>;
    getBookByID(model: any): (req: Request<import("../../../../../../Users/akaljotgujjar/Desktop/ExamAPI/node_modules/@types/express-serve-static-core").ParamsDictionary>, res: Response<any>, next: NextFunction) => Promise<void>;
    model: any;
}
