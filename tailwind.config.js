import defaultTheme from 'tailwindcss/defaultTheme';
import plugin from 'tailwindcss/plugin';
import typographyPlugin from '@tailwindcss/typography';

export default {
	content: ['./src/**/*.{astro,html,js,jsx,json,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				primary: 'rgb(var(--aw-color-primary) / <alpha-value>)',
				secondary: 'rgb(var(--aw-color-secondary) / <alpha-value>)',
				accent: 'rgb(var(--aw-color-accent) / <alpha-value>)',
				contrast: 'rgb(var(--aw-color-contrast) / <alpha-value>)',
				default: 'var(--aw-color-text-default)',
				muted: 'var(--aw-color-text-muted)',
				page: 'rgb(var(--aw-color-page) / <alpha-value>)',
				border: 'rgb(var(--aw-color-border) / <alpha-value>)',
			},
			borderColor: {
				DEFAULT: 'rgb(var(--aw-color-border) / <alpha-value>)',
			},
			fontFamily: {
				sans: ['var(--aw-font-sans, ui-sans-serif)', ...defaultTheme.fontFamily.sans],
				serif: ['var(--aw-font-serif, ui-serif)', ...defaultTheme.fontFamily.serif],
				heading: ['var(--aw-font-heading, ui-sans-serif)', ...defaultTheme.fontFamily.sans],
			},
			fontSize: {
				'5xl': ['3rem', { lineHeight: '1.1' }], // Custom line-height
			},
			animation: {
				fade: 'fadeInUp 1s both',
			},

			keyframes: {
				fadeInUp: {
				'0%': { opacity: 0, transform: 'translateY(2rem)' },
				'100%': { opacity: 1, transform: 'translateY(0)' },
				},
			},
		},
	},
	plugins: [
		typographyPlugin,
		plugin(({ addVariant }) => {
			addVariant('intersect', '&:not([no-intersect])');
		}),
	],
	darkMode: 'class',
};
