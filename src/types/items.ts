type Country = {
  name: string;
};

type ExternalId = {
  imdb: string;
  kpHD: string;
  tmdb: number;
};

type Genre = {
  name: string;
};

type Logo = {
  url: string;
};

type Name = {
  name: string;
  language?: string;
  type?: string | null;
};

type Poster = {
  previewUrl: string;
  url: string;
};

type Rating = {
  await: number | null;
  filmCritics: number | null;
  imdb: number | null;
  kp: number | null;
  russianFilmCritics: number | null;
};

type Votes = {
  await: number | null;
  filmCritics: number | null;
  imdb: number | null;
  kp: number | null;
  russianFilmCritics: number | null;
};

type WatchabilityItem = {
  logo: Logo;
  name: string;
  url: string;
};

type WatchabilityItems = {
  items: Array<WatchabilityItem>;
};

type Person = {
  description: string;
  enName: string;
  enProfession: string;
  id: number;
  name: string;
  photo: string;
  profession: string;
};

export interface ItemType {
  alternativeName: string;
  countries: Array<Country>;
  description: string;
  enName: string | null;
  externalId: ExternalId;
  genres: Array<Genre>;
  id: number;
  logo: Logo;
  movieLength: number;
  name: string;
  names: Array<Name>;
  poster: Poster;
  rating: Rating;
  shortDescription: string;
  type: string;
  votes: Votes;
  watchability: WatchabilityItems;
  year: number;
  persons?: Array<Person>;
}

export interface ItemsInfo {
  docs: Array<ItemType>;
  limit: number;
  page: number;
  pages: number;
  total: number;
}
