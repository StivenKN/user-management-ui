const daisyui = require('daisyui')
const forms = require('@tailwindcss/forms')

/** @type {import('tailwindcss').Config}*/
const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			height: {
				'90vh': '90vh'
			}
		}
	},
	daisyui: {
		themes: ['light', 'dark', 'dim', 'dracula']
	},

	plugins: [forms, daisyui]
}

module.exports = config
