import express from "express";
import type { Request, Response, Router } from "express";
import { z as Z } from "zod";

const router: Router = express.Router();

const secretMovie: number[] = [1, 2, 3];

router.get('/', (req, res: Response<number[]>) => {
    res.send(secretMovie);
})

export default router;