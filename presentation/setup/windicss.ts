import { defineWindiSetup } from '@slidev/types';

// extending the builtin windicss configurations
export default defineWindiSetup(() => ({
	shortcuts: {
		// custom the default background
		// 'bg-main': 'bg-white text-[#181818] dark:bg-[#121212] dark:text-[#ddd]',
	},
	theme: {
		extend: {
			colors: {
				logos: {
					chakra: '#319795',
				},
			},
		},
	},
}));
