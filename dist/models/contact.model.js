"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Contact {
    constructor(norm) {
        this.model = [{
                id: { type: Number, key: 'primary' },
                fullName: { type: String, maxlength: 24 },
                email: { type: String, maxlength: 250 },
                message: { type: String, maxlength: 250 },
                user_id: {
                    type: Number,
                    key: 'foreign',
                    references: { table: 'User', foreignKey: 'id' },
                    onDelete: 'cascade',
                    onUpdate: 'cascade'
                },
            }, 'A table to store users contact model', []];
    }
    set model(model) {
        this._model = model;
    }
    get model() {
        return this._model;
    }
}
exports.Contact = Contact;
