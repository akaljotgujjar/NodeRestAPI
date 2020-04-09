import { Request, Response, NextFunction } from 'express'; 

export class Book {
  _model: any;
  constructor(norm: any) {
    this.model = [{
      id: { type: Number, key: 'primary' },
      name: { type: String, maxlength: 150 },
      author: { type: String, maxlength: 150 },
      year: { type: String, maxlength: 150 },
      edition: { type: String, maxlength: 150 },
      page: { type: String, maxlength: 150 },
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
        callback: this.getAllBooks,
        requireToken: true,
      },
      {
        route: '/get-book-by-id/:id',
        method: 'POST',
        callback: this.getBookByID,
        requireToken: true,
      },
      {
        route: '/create-book',
        method: 'POST',
        callback: this.createBook,
        requireToken: true,
      },
      {
        route: '/update-book/id/:id',
        method: 'PUT',
        callback: this.updateBook,
        requireToken: true,
      },
      {
        route: '/delete/id/:id',
        method: 'DELETE',
        callback: this.deleteBook,
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

  createBook(model: any) {
    return async (req: Request, res: Response, next: NextFunction) => {
      let bookCtrl = model.controller;
      let resp = await bookCtrl.insert(req, null, null);
      res.json({ message: 'Success', resp });
    }
  }

  updateBook(model: any) {
    return async (req: Request, res: Response, next: NextFunction) => {
      let bookCtrl = model.controller;
      let resp = await bookCtrl.update(req, null, null);
      res.json({ message: 'Success', resp });
    }
  }

  deleteBook(model: any) {
    return async (req: Request, res: Response, next: NextFunction) => {
      let bookCtrl = model.controller;
      let resp = await bookCtrl.remove(req, null, null);
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