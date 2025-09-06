export interface Movie {
  id: number;
  title: string;
  releaseYear: number;
  
}

export interface Review {
  movieId: number;
  reviewer: string;
  rating: number; 
}

