import { Request, Response } from "express";
import { handleHttp } from "../utils/error.handle";
import { RequestExt } from "../interfaces/requestExt.interface";

const getOrders = (req: RequestExt, res: Response) => {
    try {
        res.send({
            data: "This can only be seen by logged in users",
            user: req.user
        });
    } catch(e) {
        handleHttp(res, "ERROR_GET_ITEMS");
    }
}

export { getOrders }