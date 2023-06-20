import { sign, verify } from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET || "token.010101";

const generateToken = (email: string) => {
    return sign({email}, JWT_SECRET, {
        expiresIn: "2h"
    });
};

const verifyToken = async () => {

};

export { generateToken, verifyToken }