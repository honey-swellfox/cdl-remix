import { type Config } from 'tailwindcss';

export const extendedTheme = {
	colors: {
		porcelain: {
			DEFAULT: '#f4f4f4',
		},
		mineshaft: {
			DEFAULT: '#393939',
		},
		codgray: {
			DEFAULT: '#161616',
		},
	},
	boxShadow: {
		'2xl': '0 0 50px 0 rgba(0, 0, 0, 0.1)',
	},

	keyframes: {
		'accordion-down': {
			from: { height: '0' },
			to: { height: 'var(--radix-accordion-content-height)' },
		},
		'accordion-up': {
			from: { height: 'var(--radix-accordion-content-height)' },
			to: { height: '0' },
		},
	},
	animation: {
		'accordion-down': 'accordion-down 0.2s ease-out',
		'accordion-up': 'accordion-up 0.2s ease-out',
	},
} satisfies Config['theme'];
