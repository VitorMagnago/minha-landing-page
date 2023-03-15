/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./index.html"],
	theme: {
		extend: {
			colors: {
				solid: {
					heading: "#42446E",
				},
				light: {
					background: "#FFFDF6",
				},
				dark: {
					content: "#666666",
				},
			},
			fontFamily: {
				dmsans: ["DM Sans", "sans-serif"],
				poppins: ["Poppin", "sans-serif"],
			},
		},
	},
	plugins: [],
};
