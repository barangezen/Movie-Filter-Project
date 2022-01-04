export interface IMovieData {
  title: string;
  description?: string;
  programType?: string;
  releaseYear: number;
  images: {
    "Poster Art": {
      height?: number;
      url?: string;
      width?: number;
    };
  };
}
