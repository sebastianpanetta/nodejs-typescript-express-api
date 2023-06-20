import { Auth } from "../interfaces/auth.interface";
import { User } from "../interfaces/user.interface";
import UserModel from "../models/user";
import { encrypt, verify } from "../utils/bcrypt.handle";
import { generateToken } from "../utils/jwt.handle";

const registerNewUser = async ({ email, password, name }: User) => {
    const user = await UserModel.findOne({email});
    if (user) return "ALREADY_USER";
    const hashedPassword = await encrypt(password);
    return await UserModel.create({
        email, 
        password: hashedPassword,
        name
    });
};

const loginUser = async ({ email, password }: Auth) => {
    const user = await UserModel.findOne({email});
    if (!user) return "NOT_FOUND_USER";

    const hashedPassword = user.password;
    const isCorrect = await verify(password, hashedPassword);
    if (!isCorrect) return "INCORRECT_PASSWORD";

    const token = generateToken(user.email);

    return token;
    
};

export { registerNewUser, loginUser };