import { Request, Response, NextFunction } from 'express'
export class Contact {
    _model: any;
    constructor(norm: any) {
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
    deleteContact(model: any) {
      return async (req: Request, res: Response, next: NextFunction) => {
        console.log('req.body===>', req.body);
        let contactCtrl = model.controller;
        let resp = await contactCtrl.remove(req, null, null);
        console.log('resp from delete', resp);
        res.json({ message: 'Success', resp });
      }
    }
    updateContact(model: any) {
      return async (req: Request, res: Response, next: NextFunction) => {
        console.log('req.body===>', req.body);
        let contactCtrl = model.controller;
        let resp = await contactCtrl.update(req, null, null);
        console.log('resp from update', resp);
        res.json({ message: 'Success', resp });
      }
    }
    createContact(model: any) {
      return async (req: Request, res: Response, next: NextFunction) => {
        console.log('req.body===>', req.body);
        let contactCtrl = model.controller;
        let resp = await contactCtrl.insert(req, null, null);
        res.json({ message: 'Success', resp });
      }
    }
    getAllContacts(model: any) {
      return async (req: Request, res: Response, next: NextFunction) => {
        req.body = {
          get: ['*']
        }
        let contactCtrl = model.controller;
        let resp = await contactCtrl.get(req, null, null);
        res.json({ message: 'Success', resp });
      }
    }
  
    getContactById(model: any) {
      return async (req: Request, res: Response, next: NextFunction) => {
        req.body = {
          get: ['*'],
          where: {
            id: req.params.id
          }
        }
        let contactCtrl = model.controller;
        let resp = await contactCtrl.get(req, null, null);
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