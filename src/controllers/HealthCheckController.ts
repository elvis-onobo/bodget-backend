import { Request, Response } from "express";

export default class HealthCheckController {
    public static async check(req:Request, res:Response){
        return res.json({
            status: 200,
            message: 'App is live!'
        })
    }
}