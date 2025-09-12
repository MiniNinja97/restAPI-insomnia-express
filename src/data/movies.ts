import express from "express";
import type { Request, Response, Router } from "express";
import * as Z from "zod";
import type { Movie, Review } from "../types/types.js";


const router: Router = express.Router();

type ErrorRes = { error: string };

const MovieSchema = Z.object({
  id: Z.number(),
  title: Z.string(),
  releaseYear: Z.number(),
  url: Z.string()
});

const ReviewSchema = Z.object({
  movieId: Z.number(),
  reviewer: Z.string(),
  rating: Z.number()
});

export const movies: Movie[] = [
  { id: 1, title: "Spirited Away", releaseYear: 2001, url: "https://www.imdb.com/title/tt0245429/" },
  { id: 2, title: "Princess Mononoke", releaseYear: 1997, url: "https://www.imdb.com/title/tt0119698/" },
  { id: 3, title: "My Neighbor Totoro", releaseYear: 1988, url: "https://www.imdb.com/title/tt0096283/" },
  { id: 4, title: "Howl's Moving Castle", releaseYear: 2004, url: "https://www.imdb.com/title/tt0347149/" },
  { id: 5, title: "Kiki's Delivery Service", releaseYear: 1989, url: "https://www.imdb.com/title/tt0097814/" },
  { id: 6, title: "The Wind Rises", releaseYear: 2013, url: "https://www.imdb.com/title/tt2013293/" },
  { id: 7, title: "Ponyo", releaseYear: 2008, url: "https://www.imdb.com/title/tt0876563/" },
  { id: 8, title: "Castle in the Sky", releaseYear: 1986, url: "https://www.imdb.com/title/tt0092067/" },
  { id: 9, title: "The Tale of the Princess Kaguya", releaseYear: 2013, url: "https://www.imdb.com/title/tt2576852/" },
  { id: 10, title: "The Boy and the Heron", releaseYear: 2023, url: "https://www.imdb.com/title/tt6718170/" }
];

export const reviews: Review[] = [
  { movieId: 1, reviewer: "Bob", rating: 10 },
  { movieId: 2, reviewer: "Charlie", rating: 8 },
  { movieId: 3, reviewer: "David", rating: 9 },
  { movieId: 4, reviewer: "Eve", rating: 7 },
  { movieId: 5, reviewer: "Frank", rating: 8 },
  { movieId: 6, reviewer: "Grace", rating: 9 },
  { movieId: 7, reviewer: "Heidi", rating: 8 },
  { movieId: 8, reviewer: "Ivan", rating: 7 },
  { movieId: 9, reviewer: "Judy", rating: 9 },
  { movieId: 10, reviewer: "Mallory", rating: 8 }
];

export { MovieSchema, ReviewSchema };
