import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				primary: "#FFD11A",
				secondary: "#1A1A1A",
				black: "#141414",
				stroke: "#262626",
			},
			fontFamily: {
				inter: ["var(--font-inter)"],
				kum: ["var(--font-kumbh)"],
			},
		},
	},
	plugins: [],
};
export default config;
