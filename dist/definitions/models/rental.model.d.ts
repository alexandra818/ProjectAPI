import { Request, Response, NextFunction } from 'express';
export declare class Rental {
    _model: any;
    constructor(norm: any);
    deleteRental(model: any): (req: Request, res: Response, next: NextFunction) => Promise<void>;
    updateRental(model: any): (req: Request, res: Response, next: NextFunction) => Promise<void>;
    createRental(model: any): (req: Request, res: Response, next: NextFunction) => Promise<void>;
    getAllRentals(model: any): (req: Request, res: Response, next: NextFunction) => Promise<void>;
    getRentalById(model: any): (req: Request, res: Response, next: NextFunction) => Promise<void>;
    model: any;
}
