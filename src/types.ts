export interface FilmPreview {
  id: string;
  imgPath: string;
  title: string;
  previewVideoLink: string;
}

export interface MainFim {
  title: string;
  genre: string;
  release: number;
}

export interface Review {
  id: string;
  date: string;
  user: string;
  comment: string;
  rating: number;
}
export interface ReviewFields {
  rating: number;
  text: string;
}

export interface Player {
  videoLink: string;
  posterImage: string;
  title?: string;
}
