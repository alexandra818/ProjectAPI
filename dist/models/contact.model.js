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
class Contact {
    constructor(norm) {
        this.model = [{
                id: { type: Number, key: 'primary' },
                fullName: { type: String, maxlength: 24 },
                email: { type: String, maxlength: 24 },
                message: { type: String, maxlength: 250 },
                user_id: {
                    type: Number,
                    key: 'foreign',
                    references: { table: 'User', foreignKey: 'id' },
                    onDelete: 'cascade',
                    onUpdate: 'cascade'
                },
            }, 'A table to store users contact model', [
                {
                    route: '/get-all-contacts',
                    method: 'POST',
                    callback: this.getAllContacts,
                    requireToken: true,
                },
                {
                    route: '/get-contact-by-id/:id',
                    method: 'POST',
                    callback: this.getContactById,
                    requireToken: true,
                },
                {
                    route: '/create-contact',
                    method: 'POST',
                    callback: this.createContact,
                    requireToken: true,
                },
                {
                    route: '/update-contact/id/:id',
                    method: 'PUT',
                    callback: this.updateContact,
                    requireToken: true,
                },
                {
                    route: '/delete/id/:id',
                    method: 'DELETE',
                    callback: this.deleteContact,
                    requireToken: true,
                }
            ]];
    }
    deleteContact(model) {
        return (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            console.log('req.body===>', req.body);
            let contactCtrl = model.controller;
            let resp = yield contactCtrl.remove(req, null, null);
            console.log('resp from delete', resp);
            res.json({ message: 'Success', resp });
        });
    }
    updateContact(model) {
        return (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            console.log('req.body===>', req.body);
            let contactCtrl = model.controller;
            let resp = yield contactCtrl.update(req, null, null);
            console.log('resp from update', resp);
            res.json({ message: 'Success', resp });
        });
    }
    createContact(model) {
        return (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            console.log('req.body===>', req.body);
            let contactCtrl = model.controller;
            let resp = yield contactCtrl.insert(req, null, null);
            res.json({ message: 'Success', resp });
        });
    }
    getAllContacts(model) {
        return (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            req.body = {
                get: ['*']
            };
            let contactCtrl = model.controller;
            let resp = yield contactCtrl.get(req, null, null);
            res.json({ message: 'Success', resp });
        });
    }
    getContactById(model) {
        return (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            req.body = {
                get: ['*'],
                where: {
                    id: req.params.id
                }
            };
            let contactCtrl = model.controller;
            let resp = yield contactCtrl.get(req, null, null);
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
exports.Contact = Contact;
