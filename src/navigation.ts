import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Brug for hjælp?',
      href: getPermalink('/#hjaelp'),
    },
    {
      text: 'Om AuroraHuset',
      href: getPermalink('/#opholdet'),
    },
    {
      text: 'Om Opholdet',
      href: getPermalink('/#opholdet'),
    },
    {
      text: 'Støt & samarbejde',
      href: getPermalink('/#opholdet'),
    },
  
    
    
  ],
  actions: [{ text: 'Forlad side', href: 'https://dr.dk', target: '_parent' }],
};

export const footerData = {
    links: [
        {
            title: '',
            links: [
                { text: 'Om AuroraHuset', href: '#' },
                { text: 'Ophold hos AuroraHuset', href: '#' },
                { text: 'Tilgang & metoder', href: '#' },
            ],
        },
    
        {
            title: '',
            links: [
                { text: 'Donationer', href: '#' },
                { text: 'Samarbejde', href: '#' },
                { text: 'Job', href: '#' },
            ],
        },
        {
            title: '',
            links: [
                { text: 'Cookiepræferencer', href: '#' },
                { text: 'Privatlivspolitik', href: getPermalink('/privacy') },
            ],
        },
    
    ],
  secondaryLinks: [
    // { text: 'Privatlivspolitik', href: getPermalink('/privacy') },
  ],
  socialLinks: [
    { ariaLabel: 'X', icon: 'tabler:brand-x', href: '#' },
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: '#' },
    { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: '#' },
    { ariaLabel: 'RSS', icon: 'tabler:rss', href: getAsset('/rss.xml') },
    { ariaLabel: 'Github', icon: 'tabler:brand-github', href: 'https://github.com/arthelokyo/astrowind' },
  ],
  footNote: `
    © ${new Date().getFullYear()} Aurora Women ApS · Alle rettigheder forbeholdes · Website af <a class="text-primary font-semibold dark:text-muted" href="https://monsun.dk"> MONSUN</a>
  `,
};
