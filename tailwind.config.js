/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./index.html"],
	theme: {
		extend: {
			colors: {
				solid: {
					heading: "#392F5A",
				},
				light: {
					background: "#FFF8F0",
				},
				dark: {
					content: "#666666",
				},
				asset: {
					green: "#9DD9D2",
					orange: "#FF8811",
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
