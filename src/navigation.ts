import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Brug for hjælp?',
      href: getPermalink('/#hjaelp'),
    },
    {
      text: 'AuroraHuset',
      href: getPermalink('/#opholdet'),
    },
    {
      text: 'Opholdet',
      href: getPermalink('/#opholdet'),
    },
  
    {
      text: 'Mere',
      links: [
        {
          text: 'Om AuroraHuset',
          href: getPermalink('/om-aurorahuset'),
        },
        {
          text: 'Ophold hos AuroraHuset',
          href: getPermalink('/ophold'),
        },
        {
          text: 'Tilgang & Metoder',
          href: getPermalink('/homes/mobile-app'),
        },
        {
          text: 'Støt & Samarbejde',
          href: getPermalink('/homes/personal'),
        },
        {
          text: 'Job hos AuroraHuset',
          href: getPermalink('/homes/personal'),
        },
      ],
    },
    
  ],
  actions: [{ text: 'Forlad side', href: 'https://dr.dk', target: '_parent' }],
};

export const footerData = {
  links: [
    {
      title: 'Product',
      links: [
        { text: 'Features', href: '#' },
        { text: 'Security', href: '#' },
        { text: 'Team', href: '#' },
        { text: 'Enterprise', href: '#' },
        { text: 'Customer stories', href: '#' },
        { text: 'Pricing', href: '#' },
        { text: 'Resources', href: '#' },
      ],
    },
    {
      title: 'Platform',
      links: [
        { text: 'Developer API', href: '#' },
        { text: 'Partners', href: '#' },
        { text: 'Atom', href: '#' },
        { text: 'Electron', href: '#' },
        { text: 'AstroWind Desktop', href: '#' },
      ],
    },
    {
      title: 'Support',
      links: [
        { text: 'Docs', href: '#' },
        { text: 'Community Forum', href: '#' },
        { text: 'Professional Services', href: '#' },
        { text: 'Skills', href: '#' },
        { text: 'Status', href: '#' },
      ],
    },
    {
      title: 'Company',
      links: [
        { text: 'About', href: '#' },
        { text: 'Blog', href: '#' },
        { text: 'Careers', href: '#' },
        { text: 'Press', href: '#' },
        { text: 'Inclusion', href: '#' },
        { text: 'Social Impact', href: '#' },
        { text: 'Shop', href: '#' },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Terms', href: getPermalink('/terms') },
    { text: 'Privacy Policy', href: getPermalink('/privacy') },
  ],
  socialLinks: [
    { ariaLabel: 'X', icon: 'tabler:brand-x', href: '#' },
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: '#' },
    { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: '#' },
    { ariaLabel: 'RSS', icon: 'tabler:rss', href: getAsset('/rss.xml') },
    { ariaLabel: 'Github', icon: 'tabler:brand-github', href: 'https://github.com/arthelokyo/astrowind' },
  ],
  footNote: `
    Made by <a class="text-blue-600 underline dark:text-muted" href="https://monsun.dk"> MONSUN</a> · All rights reserved.
  `,
};
