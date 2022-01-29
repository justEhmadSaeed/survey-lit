module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {
			colors: {
				'template-black': '#262627',
				'template-home-background': '#F2ECE4',
				'template-menu-background': '#131313',
				'template-signup-text': '#4c4c4c',
				'template-auth-text': '#5e5e5e',
				'template-auth-border': '#c3c3c3',
				'template-green': '#026451',
				'template-hover-color': '#f0f0f0',
				'template-dashboard-bg': '#fafafa'
			},
			bottom: {
				'-20%': '-20%',
				'-10%': '-10%',
				'20%': '20%'
			},
			left: {
				'-5%': '-5%',
				'-2%': '-2%'
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
