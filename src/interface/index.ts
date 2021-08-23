import { Request, Response } from 'express'
import { IRide } from 'rides/interface/ride-interface'

export interface ModifiedRequest extends Request {
  db: any
  clientIp?: string
  userAgent: {
    os?: string,
    browser?: string,
    device?: string
    vendor?: string,
    version?: string,
    model?: string,
  }
}


export interface ModifiedResponse extends Response, IRide {
  name: string
}
