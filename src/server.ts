import express from "express";

import moviesRouter from "./routes/routing.js"; 
import cors from "cors";
import authenticate from "./middleware/auth.js";
import hiddenMovieRouter from "./routes/hiddenMovie.js";
import logger from "./middleware/logger.js";

const app = express();
const port = 12345;

app.use(cors());
app.use(express.json());
app.use(logger);


app.use(express.static("public"));


app.use("/secret", authenticate, hiddenMovieRouter);
app.use("/movies", moviesRouter);

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});



