
import express from "express";
import type { Request, Response, Router } from "express";
import * as Z from "zod";
import type { Movie, Review } from "../data/types.js";
import { movies, reviews } from "./movies.js"; 

const router: Router = express.Router();

const MovieSchema = Z.object({
  id: Z.number(),
  title: Z.string(),
  releaseYear: Z.number(),
});

const ReviewSchema = Z.object({
  movieId: Z.number(),
  reviewer: Z.string(),
  rating: Z.number(),
});


router.get("/", (req: Request, res: Response<Movie[]>) => {
  res.json(movies);
});


router.get("/:id", (req: Request<{ id: string }>, res: Response<Movie | { error: string }>) => {
  const id = parseInt(req.params.id);
  const movie = movies.find((m) => m.id === id);
  if (movie) {
    res.json(movie);
  } else {
    res.status(404).json({ error: "Movie not found" });
  }
});


router.get("/:id/reviews", (req: Request<{ id: string }>, res: Response<Review[]>) => {
  const id = parseInt(req.params.id);
  const movieReviews = reviews.filter((r) => r.movieId === id);
  res.json(movieReviews);
});


router.post("/", (req: Request<{}, {}, Movie>, res: Response) => {
  try {
    const newMovie = MovieSchema.parse(req.body);
    movies.push(newMovie);
    res.status(201).json(newMovie);
  } catch (e) {
    res.status(400).json({ error: "Invalid movie data" });
  }
});


router.post("/:id/reviews", (req: Request<{ id: string }, {}, Review>, res: Response) => {
  try {
    const newReview = ReviewSchema.parse(req.body);
    reviews.push(newReview);
    res.status(201).json(newReview);
  } catch (e) {
    res.status(400).json({ error: "Invalid review data" });
  }
});


router.delete("/:id", (req: Request<{ id: string }>, res: Response) => {
  const id = parseInt(req.params.id);
  const index = movies.findIndex((m) => m.id === id);

  if (index !== -1) {
    movies.splice(index, 1);
    res.sendStatus(200);
  } else {
    res.sendStatus(404);
  }
});


router.put("/:id", (req: Request<{ id: string }, {}, Movie>, res: Response) => {
  const id = parseInt(req.params.id);
  const index = movies.findIndex((m) => m.id === id);

  if (index === -1) {
    return res.status(404).json({ error: "Movie not found" });
  }

  try {
    const updatedMovie = MovieSchema.parse(req.body);

    if (updatedMovie.id !== id) {
      return res.status(400).json({ error: "Movie ID mismatch" });
    }

    movies[index] = updatedMovie;
    res.status(200).json(updatedMovie);
  } catch (e) {
    res.status(400).json({ error: "Invalid data" });
  }
});

export default router;
