module.exports = {
	darkMode: "class",
	content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
	plugins: [require("daisyui")],
	theme: {
		extend: {
			fontFamily: {
				manrope: ["Manrope", "sans-serif"],
			},
		},
	}/* ,
	daisyui: {
    themes: ["light", "dark"],
	}, */
	,
	daisyui: {
    themes: [
			{
				default: {
					primary: "#718238",
					"primary-focus": "#ba3b45",
					"primary-content": "#f0f0f0",

					secondary: "#F4F4F4",
					"secondary-focus": "#b66b25",
					"secondary-content": "#f0f0f0",

					accent: "#232323",
					"accent-focus": "#edb91d",
					"accent-content": "#f0f0f0",

					neutral: "#232323",
					"neutral-focus": "#7e899a",
					"neutral-content": "#f0f0f0", 
				},
			},
		],
	},
};