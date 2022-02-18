export const getInitialTheme = (dispatch) => {
	let darkMode = false;
	if (typeof window !== 'undefined' && window.localStorage) {
		const storedPrefs = window.localStorage.getItem('dark-theme');
		darkMode = storedPrefs === 'true';
	}
	toggleTheme(darkMode, dispatch);
};

export const toggleTheme = (darkMode, dispatch) => {
	if (typeof window !== 'undefined' && window.localStorage) {
		window.localStorage.setItem('dark-theme', darkMode);
	}
	if (darkMode) document.documentElement.classList.add('dark');
	else document.documentElement.classList.remove('dark');

	dispatch(darkMode);
};
