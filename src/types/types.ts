export interface Movie {
  id: number;
  title: string;
  releaseYear: number;
  url?: string;
  
}

export interface Review {
  movieId: number;
  reviewer: string;
  rating: number; 
}

