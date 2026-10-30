// STEP3: interfaces que describen la respuesta de la API de Rick & Morty
// GET https://rickandmortyapi.com/api/character
// (generadas con https://transform.tools/json-to-typescript y ajustadas a mano)

export interface CharacterListResponse {
  info: Info;
  results: Character[];
}

export interface Info {
  count: number;
  pages: number;
  next: string | null;
  prev: string | null;
}

// La lista ya devuelve el personaje completo, y la petición de detalle
// GET https://rickandmortyapi.com/api/character/{id} devuelve este mismo objeto.
export interface Character {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: Place;
  location: Place;
  image: string;
  episode: string[];
  url: string;
  created: string;
}

export interface Place {
  name: string;
  url: string;
}
