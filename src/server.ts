import express from "express";
import type { RequestHandler } from "express";
import moviesRouter from "./routes/routing.js"; 
import cors from 'cors';
import authenticate from "./middleware/auth.js";
import hiddenMovieRouter from "./routes/hiddenMovie.js";



const app = express();
const port = 12345;


const logger: RequestHandler = (req, res, next) => {
  console.log(`${req.method} ${req.url}`, req.body);
  next();
};

app.use(cors());
app.use(express.json());
app.use(logger);
app.use('/', authenticate);
app.use('/secret', hiddenMovieRouter);
app.use("/movies", moviesRouter);

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});


