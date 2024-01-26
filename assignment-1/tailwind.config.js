import aspectRatio from '@tailwindcss/aspect-ratio';

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			extend: {
				gridTemplateRows: {
					'[auto,auto,1fr]': 'auto auto 1fr'
				}
			}
		}
	},
	corePlugins: {
		aspectRatio: false
	},
	plugins: [aspectRatio]
};
