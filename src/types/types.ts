// Api response data

export interface dataTypes {
  count: number
  next: string
  previous: string
  results: characterType[]
}

export interface characterType {
  birth_year: string
  created: string
  edited: string
  eye_color: string
  films: string[]
  gender: string
  hair_color: string
  height: number
  homeworld: string
  mass: number
  name: string
  skin_color: string
  species: string[]
  starships: string[]
  url: string
  vehicles: string[]
}
