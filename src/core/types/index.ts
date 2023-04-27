export interface IBeer {
  id: number
  name: string
  description: string
  image_url: string

  // слоган
  tagline: string
  // объем
  volume: IVolume
  // объем кипения
  boil_volume: IVolume
  // советы пивоваров
  brewers_tips: string
  // кем внесен
  contributed_by: string
  // впервые сваренно
  first_brewed: string
  // сочетаемость с едой
  food_pairing: string[]

  target_fg: number
  target_og: number
}

// Объем
export interface IVolume {
  value: number
  unit: string
}