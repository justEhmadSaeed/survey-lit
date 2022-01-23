module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {
			colors: {
				'template-black': '#262627',
				'template-home-background': '#F2ECE4',
				'template-signup-text': '#4c4c4c'
			},
			bottom: {
				'-20%': '-20%',
				'20%': '20%'
			},
			left: {
				'-5%': '-5%'
			},
			height: {
				'150%': '150%',
				'1px': '1px'
			},
			top: {
				'-0.7rem': '-0.7rem'
			}
		},
		fontFamily: {
			Poppins: ['Poppins, sans-serif']
		},
		container: {
			center: true,
			padding: '1rem',
			screens: {
				lg: '1124px',
				xl: '1124px',
				'2xl': '1124px'
			}
		}
	},
	plugins: []
};
