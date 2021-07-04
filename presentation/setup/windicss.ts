import { defineWindiSetup } from "@slidev/types";

// extending the builtin windicss configurations
export default defineWindiSetup(() => ({
	shortcuts: {
		// custom the default background
		// 'bg-main': 'bg-white text-[#181818] dark:bg-[#121212] dark:text-[#ddd]',
	},
	theme: {
		extend: {
			colors: {
				black75: "rgba(0,0,0,.75)",
				black65: "rgba(0,0,0,.65)",
				beapt: "#F26522",
				altBlue: "#003049",
				logos: {
					chakra: "#319795",
				},
				danger: "#d32f2f",
				success: "#00695c",
			},
		},
	},
}));
