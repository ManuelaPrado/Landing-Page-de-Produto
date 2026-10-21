export interface NavItem {
  label: string
  id: string
}

export const site = {
  name: 'RobotDragon',
  tagline: 'Escolha o seu dragão. Treine a lenda.',
  shortPitch:
    'O dragão-robô de companhia que você escolhe entre os lendários dragões dos filmes e treina todos os dias.',
  supportEmail: 'contato@RobotDragon.example',
  nav: [
    { label: 'Dragões', id: 'dragoes' },
    { label: 'Diferenciais', id: 'diferenciais' },
    { label: 'Como funciona', id: 'como-funciona' },
    { label: 'Avaliações', id: 'avaliacoes' },
    { label: 'Planos', id: 'planos' },
    { label: 'Dúvidas', id: 'faq' },
  ] satisfies NavItem[],
  social: [
    { label: 'Instagram', href: 'https://instagram.com' },
    { label: 'TikTok', href: 'https://tiktok.com' },
    { label: 'YouTube', href: 'https://youtube.com' },
  ],
} as const
