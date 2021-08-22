import { Request, Response } from 'express';
import { IRide } from 'rides/interface/ride-interface';
export interface ModifiedRequest extends Request {
    db: any;
}
export interface ModifiedResponse extends Response, IRide {
    name: string;
}
