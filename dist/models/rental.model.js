"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Rental {
    constructor(norm) {
        this.model = [{
                id: { type: Number, key: 'primary' },
                location: { type: String, maxlength: 24 },
                rules: { type: String, maxlength: 250 },
                description: { type: String, maxlength: 250 },
                cancellations: { type: String, maxlength: 250 },
                image: { type: String, maxlength: 1000 },
                user_id: {
                    type: Number,
                    key: 'foreign',
                    references: { table: 'User', foreignKey: 'id' },
                    onDelete: 'cascade',
                    onUpdate: 'cascade'
                },
            }, 'A table to store users rental model', []];
    }
    set model(model) {
        this._model = model;
    }
    get model() {
        return this._model;
    }
}
exports.Rental = Rental;
