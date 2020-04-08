import { Request, Response, NextFunction } from 'express'; 

export class Book {
  _model: any;
  constructor(norm: any) {
    this.model = [{
      id: { type: Number, key: 'primary' },
      make: { type: String, maxlength: 24 },
      model: { type: String, maxlength: 24 },
      year: { type: String, maxlength: 24 },
      mileage: { type: String, maxlength: 24 },
      user_id: {
        type: Number,
        key: 'foreign',
        references: { table: 'User', foreignKey: 'id' },
        onDelete: 'cascade',
        onUpdate: 'cascade'
      },
    }, 'A table to store users book model',
    [
      {
        route: '/get-all-book',
        method: 'POST',
        callback: this.getBookByID,
        requireToken: true,
      },
      {
        route: '/get-book-by-id/:id',
        method: 'POST',
        callback: this.getBookByID,
        requireToken: true,
      }

    ]];
  }

  getAllBooks(model: any) {
    return async (req: Request, res: Response, next: NextFunction) => {
      req.body = {
          get: ["*"]
        }

      let bookCtrl = model.controller;
      let resp = await bookCtrl.get(req, null, null);
      res.json({ message: 'Success', resp });
    }
  }

  getBookByID(model: any) {
    return async (req: Request, res: Response, next: NextFunction) => {
      req.body = {
          get: ["*"],
          where: {
            id: req.params.id
          }
        }

      let bookCtrl = model.controller;
      let resp = await bookCtrl.get(req, null, null);
      res.json({ message: 'Success', resp });
    }
  }


  set model(model: any) {
    this._model = model;
  }

  get model() {
    return this._model;
  }

}