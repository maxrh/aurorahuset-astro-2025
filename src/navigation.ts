import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Brug for hjælp?',
      href: '/#hjaelp',
    },
    {
      text: 'Om AuroraHuset',
      href: '/#om-aurorahuset',
    },
    {
      text: 'Om Opholdet',
      href: '/#om-opholdet',
    },
    {
      text: 'Støt & samarbejde',
      href: '/#stoet-samarbejde',
    },
  
    
    
  ],
  actions: [{ text: 'Forlad side', href: 'https://dr.dk', target: '_parent', icon: 'tabler:arrow-right-dashed', variant: 'primary' }],
};

export const footerData = {
    links: [
  
        {
            title: '',
            links: [
                { text: 'Om AuroraHuset', href: getPermalink('/om-aurorahuset/') },
                { text: 'Om Opholdet', href: getPermalink('/ophold/') },
                // { text: 'Cookiepræferencer', href: '#' },
                { text: 'Kontakt', href: getPermalink('/kontakt/') },
                { text: 'Privatlivspolitik', href: getPermalink('/privatlivspolitik/') },
            ],
        },
    
    ],
  secondaryLinks: [
    // { text: 'Privatlivspolitik', href: getPermalink('/privacy') },
  ],
  socialLinks: [
    // { ariaLabel: 'X', icon: 'tabler:brand-x', href: '#' },
    // { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: '#' },
    // { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: '#' },
    { ariaLabel: 'RSS', icon: 'tabler:rss', href: getAsset('/rss.xml') },
    // { ariaLabel: 'Github', icon: 'tabler:brand-github', href: 'https://github.com/arthelokyo/astrowind' },
  ],
  footNote: `
    © ${new Date().getFullYear()} Aurora Women ApS · Alle rettigheder forbeholdes · Website af <a class="hover:text-primary font-semibold transition duration-200 ease-in-out" href="https://monsun.dk"> MONSUN</a>
  `,
};
