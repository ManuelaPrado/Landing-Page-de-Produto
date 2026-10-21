export type DragonRarity = 'Comum' | 'Raro' | 'Épico' | 'Lendário'

export type DragonClass =
  | 'Ataque'
  | 'Rocha'
  | 'Marinho'
  | 'Mistério'
  | 'Rastreador'
  | 'Alfa'

export interface DragonStats {
  velocidade: number
  fogo: number
  forca: number
  astucia: number
  resistencia: number
}

export interface Dragon {
  id: string
  name: string
  species: string
  dragonClass: DragonClass
  rarity: DragonRarity
  image: string
  accent: string
  rider: string
  debut: string
  tagline: string
  abilities: string[]
  lore: string
  stats: DragonStats
}

export const STAT_LABELS: Record<keyof DragonStats, string> = {
  velocidade: 'Velocidade',
  fogo: 'Poder de fogo',
  forca: 'Força',
  astucia: 'Astúcia',
  resistencia: 'Resistência',
}
