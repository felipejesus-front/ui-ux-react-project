/** @type {import('tailwindcss').Config} */

const plugin = require("tailwindcss/plugin");
module.exports = {
	content: ["./src/**/*.tsx", "./index.html"],
	theme: {
		colors: {
			p1: "#15304D",
			"p1-b": "#3B4857",
			p2: "#BE9D5D",
			p3: "#E1E2CD",
			bg1: "#FFFFF2",
			"err-cor": "#AB312F",
			black: "#000000",
			white: "#ffffff",
			"d-color": "#A0A0A0",
			"linear-c1": "#23466B",
		},
		screens: {
			"2xl": { max: "1535px" },
			// => @media (max-width: 1535px) { ... }

			xl: { max: "1279px" },
			// => @media (max-width: 1279px) { ... }

			lg: { max: "1023px" },
			// => @media (max-width: 1023px) { ... }

			md: { max: "767px" },
			// => @media (max-width: 767px) { ... }

			sm: { max: "639px" },
			// => @media (max-width: 639px) { ... }
		},
		extend: {
			gridTemplateColumns: {
				"cart-4": "repeat(4, minmax(0, 150px))",
				"cart-2": "repeat(2, minmax(0, 150px))",
			},
		},
	},
	plugins: [
		function (helpers) {
			// variants that help styling Radix-UI components
			dataStateVariant("open", helpers);
			dataStateVariant("closed", helpers);
			dataStateVariant("on", helpers);
			dataStateVariant("checked", helpers);
			dataStateVariant("unchecked", helpers);
			dataStateVariant("active", helpers);
		},
	],
};

function dataStateVariant(
	state,
	{
		addVariant, // for registering custom variants
		e, // for manually escaping strings meant to be used in class names
	}
) {
	addVariant(`data-state-${state}`, ({ modifySelectors, separator }) => {
		modifySelectors(({ className }) => {
			return `.${e(
				`data-state-${state}${separator}${className}`
			)}[data-state='${state}']`;
		});
	});

	addVariant(
		`group-data-state-${state}`,
		({ modifySelectors, separator }) => {
			modifySelectors(({ className }) => {
				return `.group[data-state='${state}'] .${e(
					`group-data-state-${state}${separator}${className}`
				)}`;
			});
		}
	);

	addVariant(`peer-data-state-${state}`, ({ modifySelectors, separator }) => {
		modifySelectors(({ className }) => {
			return `.peer[data-state='${state}'] ~ .${e(
				`peer-data-state-${state}${separator}${className}`
			)}`;
		});
	});
}
