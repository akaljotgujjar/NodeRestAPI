"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
class Book {
    constructor(norm) {
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
    getAllBooks(model) {
        return (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            req.body = {
                get: ["*"]
            };
            let bookCtrl = model.controller;
            let resp = yield bookCtrl.get(req, null, null);
            res.json({ message: 'Success', resp });
        });
    }
    getBookByID(model) {
        return (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            req.body = {
                get: ["*"],
                where: {
                    id: req.params.id
                }
            };
            let bookCtrl = model.controller;
            let resp = yield bookCtrl.get(req, null, null);
            res.json({ message: 'Success', resp });
        });
    }
    createBook(model) {
        return (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            let bookCtrl = model.controller;
            let resp = yield bookCtrl.insert(req, null, null);
            res.json({ message: 'Success', resp });
        });
    }
    updateBook(model) {
        return (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            let bookCtrl = model.controller;
            let resp = yield bookCtrl.update(req, null, null);
            res.json({ message: 'Success', resp });
        });
    }
    deleteBook(model) {
        return (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            let bookCtrl = model.controller;
            let resp = yield bookCtrl.remove(req, null, null);
            res.json({ message: 'Success', resp });
        });
    }
    set model(model) {
        this._model = model;
    }
    get model() {
        return this._model;
    }
}
exports.Book = Book;
