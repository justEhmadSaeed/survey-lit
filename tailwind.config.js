module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	darkMode: 'class',
	theme: {
		extend: {
			backgroundImage: {
				'split-white-mustard':
					'linear-gradient(to bottom, transparent 40% , #F3EBE5 40%);'
			},
			colors: {
				'template-black': '#262627',
				'template-home-background': '#F2ECE4',
				'template-menu-background': '#131313',
				'template-signup-text': '#4c4c4c',
				'template-auth-text': '#5e5e5e',
				'template-auth-border': '#c3c3c3',
				'template-green': '#697D5E',
				'template-hover-color': '#f0f0f0',
				'template-dashboard-bg': '#fafafa',
				'template-question-icon': '#d65c99',
				'template-mustard': '#F7931E',
				'template-light-grey': '#F8F5F3',
				'template-grey': '#3B3B3B',
				'template-maroon': '#AD5545'
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
