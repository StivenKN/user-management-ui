const daisyui = require('daisyui')
const forms = require('@tailwindcss/forms')

/** @type {import('tailwindcss').Config}*/
const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {}
	},
	daisyui: {
		themes: ['light', 'dark', 'dim', 'dracula']
	},

	plugins: [forms, daisyui]
}

module.exports = config
