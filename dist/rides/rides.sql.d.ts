import { CreateRideDto } from './dto';
import { FetchRideQueryResponse, InsertRideResponse, FetchRidesResponse } from './interface/ride-interface';
export declare const fetchAllRides: (db: any) => Promise<FetchRidesResponse>;
export declare const insertRide: (db: any, newRide: CreateRideDto) => Promise<InsertRideResponse>;
export declare const fetchRide: (db: any, rideID: number) => Promise<FetchRideQueryResponse>;
