import { Request, Response } from "express";
import { registerNewUser, loginUser } from "../services/auth";

const register = async (req: Request, res: Response) => {
    const response = await registerNewUser(req.body);
    res.send(response);
};

const login = async (req: Request, res: Response) => {
    const { email, password } = req.body;
    const response = await loginUser({ email, password });
    if (response === "INCORRECT_PASSWORD") {
        res.status(403).send(response);
    } else {
        res.send(response);
    };
};

export { register, login };