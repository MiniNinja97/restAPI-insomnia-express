
import type { RequestHandler } from "express";

const logger: RequestHandler = (req, res, next) => {
  console.log(`${req.method} ${req.url}`, req.body);
  next();
};

export default logger;
