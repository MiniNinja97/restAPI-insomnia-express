import type { RequestHandler } from "express";


const authenticate: RequestHandler = (req, res, next) => {

    const hiddenMovie: string[] = ['/secret'];

    for(let i=0; i<hiddenMovie.length; i++){
        if(req.url.startsWith(hiddenMovie[i]!)){ 
            res.sendStatus(401);
            return;
        }
    }
    next();
};

export default authenticate;