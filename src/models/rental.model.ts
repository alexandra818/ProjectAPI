import { Request, Response, NextFunction } from 'express'
export class Rental {
  _model: any;
  constructor(norm: any) {
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
  deleteRental(model: any) {
    return async (req: Request, res: Response, next: NextFunction) => {
      console.log('req.body===>', req.body);
      let rentalCtrl = model.controller;
      let resp = await rentalCtrl.remove(req, null, null);
      console.log('resp from delete', resp);
      res.json({ message: 'Success', resp });
    }
  }
  updateRental(model: any) {
    return async (req: Request, res: Response, next: NextFunction) => {
      console.log('req.body===>', req.body);
      let rentalCtrl = model.controller;
      let resp = await rentalCtrl.update(req, null, null);
      console.log('resp from update', resp);
      res.json({ message: 'Success', resp });
    }
  }
  createRental(model: any) {
    return async (req: Request, res: Response, next: NextFunction) => {
      console.log('req.body===>', req.body);
      let rentalCtrl = model.controller;
      let resp = await rentalCtrl.insert(req, null, null);
      res.json({ message: 'Success', resp });
    }
  }
  getAllRentals(model: any) {
    return async (req: Request, res: Response, next: NextFunction) => {
      req.body = {
        get: ['*']
      }
      let rentalCtrl = model.controller;
      let resp = await rentalCtrl.get(req, null, null);
      res.json({ message: 'Success', resp });
    }
  }

  getRentalById(model: any) {
    return async (req: Request, res: Response, next: NextFunction) => {
      req.body = {
        get: ['*'],
        where: {
          id: req.params.id
        }
      }
      let rentalCtrl = model.controller;
      let resp = await rentalCtrl.get(req, null, null);
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