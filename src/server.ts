import express from "express";
import type { RequestHandler } from "express";
import moviesRouter from "./routes/routing.js"; // default-export från routing.ts

const app = express();
const port = 12345;


const logger: RequestHandler = (req, res, next) => {
  console.log(`${req.method} ${req.url}`, req.body);
  next();
};

app.use(express.json());
app.use(logger);


app.use("/movies", moviesRouter);

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});


