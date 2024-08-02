/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				"VT323": ["VT323", "system-ui"]
			},
			animation: {
				"pulse-fast": "pulse 1.25s cubic-bezier(0.4, 0, 0.6, 1) infinite"
			}
		},
	},
	plugins: [],
}
