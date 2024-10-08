export interface Root {
  info: Info
  results: Result[]
}

export interface Info {
  count: number
  pages: number
  next: string
  prev: any
}

export interface Result {
  id: number
  name: string
  status: string
  species: string
  type: string
  gender: string
  origin: Origin
  location: Location
  image: string
  episode: string[]
  url: string
  created: string
}

export interface Origin {
  name: string
  url: string
}

export interface Location {
  name: string
  url: string
}

export interface CharacterData {
  id: number;
  name: string;
  species: string;
  origin: {
    name: string;
  };
  image: string;
}

export interface fetchApiRequest {
  page: number | 1,
  option: "character" | "episode" | "location",
  query: string | ""
}