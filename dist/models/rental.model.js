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
class Rental {
    constructor(norm) {
        this.model = [{
                id: { type: Number, key: 'primary' },
                location: { type: String, maxlength: 24 },
                rules: { type: String, maxlength: 250 },
                description: { type: String, maxlength: 250 },
                cancellations: { type: String, maxlength: 250 },
                image_url: { type: String, maxlength: 1000 },
                user_id: {
                    type: Number,
                    key: 'foreign',
                    references: { table: 'User', foreignKey: 'id' },
                    onDelete: 'cascade',
                    onUpdate: 'cascade'
                },
            }, 'A table to store users rental model', [
                {
                    route: '/get-all-rentals',
                    method: 'POST',
                    callback: this.getAllRentals,
                    requireToken: true,
                },
                {
                    route: '/get-rental-by-id/:id',
                    method: 'POST',
                    callback: this.getRentalById,
                    requireToken: true,
                },
                {
                    route: '/create-rental',
                    method: 'POST',
                    callback: this.createRental,
                    requireToken: true,
                },
                {
                    route: '/update-rental/id/:id',
                    method: 'PUT',
                    callback: this.updateRental,
                    requireToken: true,
                },
                {
                    route: '/delete/id/:id',
                    method: 'DELETE',
                    callback: this.deleteRental,
                    requireToken: true,
                }
            ]];
    }
    deleteRental(model) {
        return (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            console.log('req.body===>', req.body);
            let rentalCtrl = model.controller;
            let resp = yield rentalCtrl.remove(req, null, null);
            console.log('resp from delete', resp);
            res.json({ message: 'Success', resp });
        });
    }
    updateRental(model) {
        return (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            console.log('req.body===>', req.body);
            let rentalCtrl = model.controller;
            let resp = yield rentalCtrl.update(req, null, null);
            console.log('resp from update', resp);
            res.json({ message: 'Success', resp });
        });
    }
    createRental(model) {
        return (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            console.log('req.body===>', req.body);
            let rentalCtrl = model.controller;
            let resp = yield rentalCtrl.insert(req, null, null);
            res.json({ message: 'Success', resp });
        });
    }
    getAllRentals(model) {
        return (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            req.body = {
                get: ['*']
            };
            let rentalCtrl = model.controller;
            let resp = yield rentalCtrl.get(req, null, null);
            res.json({ message: 'Success', resp });
        });
    }
    getRentalById(model) {
        return (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            req.body = {
                get: ['*'],
                where: {
                    id: req.params.id
                }
            };
            let rentalCtrl = model.controller;
            let resp = yield rentalCtrl.get(req, null, null);
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
exports.Rental = Rental;
