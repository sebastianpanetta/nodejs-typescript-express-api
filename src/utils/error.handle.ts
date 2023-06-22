import { Response } from "express";

const handleHttp = (res: Response, error: string, errorRaw?: any) => {
    console.error(errorRaw);
    res.status(500).send({ error });
}

export { handleHttp };