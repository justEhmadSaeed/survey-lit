module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {
			colors: {
				'template-black': '#262627',
				'template-home-background': '#F2ECE4'
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
