import { hash, compare } from "bcryptjs";

const encrypt = async (password: string) => {
    return await hash(password, 8);
};

const verify = async (password: string, hashedPassword: string) => {
    return await compare(password, hashedPassword);
};

export { encrypt, verify };