import { NextFunction, Request, Response } from "express";
import { verifyToken } from "../utils/jwt.handle";
import { RequestExt } from "../interfaces/requestExt.interface";

const checkJwt = (req: RequestExt, res: Response, next: NextFunction) => {
    try {
        const userJwt = req.headers.authorization || "";
        const jwt = userJwt.split(" ").pop();
        const isUser = verifyToken(`${jwt}`) as { id: string};
        if (!isUser) {
            res.status(401).send("INVALID_JWT");
        } else {
            req.user = isUser;
            next();
        }
    } catch(e) {
        console.error(e);
        res.status(500).send("INVALID_SESSION");
    }
};

export { checkJwt };