export interface Movie {
  id: string;
  title: string;
  description: string;
  thumbnailUrl: string;
  videoUrl: string;
  duration: string;
  genre: string;
}

export interface MutationOptions {
  movieId: string;
}

interface EmailError extends Error {
  email: string;
}
