import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Brug for hjælp?',
      href: getPermalink('/#hjaelp'),
    },
    {
      text: 'Om AuroraHuset',
      href: getPermalink('/#om-aurorahuset'),
    },
    {
      text: 'Om Opholdet',
      href: getPermalink('/#om-opholdet'),
    },
    {
      text: 'Støt & samarbejde',
      href: getPermalink('/#stoet-samarbejde'),
    },
  
    
    
  ],
  actions: [{ text: 'Forlad side', href: 'https://dr.dk', target: '_parent' }],
};

export const footerData = {
    links: [
        {
            title: '',
            links: [
                { text: 'Om AuroraHuset', href: '/om-aurorahuset' },
                { text: 'Tilgang & metoder', href: '/tilgang-metoder' },
                { text: 'Ophold hos AuroraHuset', href: '/ophold' },
            ],
        },
    
        {
            title: '',
            links: [
                { text: 'Donationer', href: '/donationer' },
                { text: 'Samarbejde', href: '/samarbejde' },
                { text: 'Job', href: '/job' },
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
