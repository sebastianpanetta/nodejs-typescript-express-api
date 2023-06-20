import { Router } from "express";
import { readdirSync } from "fs";

const ROUTER_PATH = `${__dirname}`;
const router = Router();

const cleanFileName = (fileName: string) => {
    return fileName.split(".").shift();
}

readdirSync(ROUTER_PATH).filter((fileName) => {
    const cleanName = cleanFileName(fileName);
    if (cleanName !== "index") {
        import(`./${cleanName}`).then((moduleRouter) => {
            console.log(`Loading route /${cleanName}`);
            router.use(`/${cleanName}`, moduleRouter.router);
        })
    }
});

export { router };