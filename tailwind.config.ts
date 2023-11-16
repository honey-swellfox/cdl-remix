import type { Config } from 'tailwindcss';

export default {
	content: ['./app/**/*.{ts,tsx,jsx,js}'],
	theme: {
		extend: {
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
			// fontFamily: {
			// 	sans: [
			// 		'IBMPlexSans',
			// 		'-apple-system',
			// 		'BlinkMacSystemFont',
			// 		'"Segoe UI"',
			// 		'Roboto',
			// 		'"Helvetica Neue"',
			// 		'Arial',
			// 		'"Noto Sans"',
			// 		'serif',
			// 		'"Apple Color Emoji"',
			// 		'"Segoe UI Emoji"',
			// 		'"Segoe UI Symbol"',
			// 		'"Noto Color Emoji"',
			// 	],
			// },
		},
	},
	plugins: [],
} satisfies Config;
