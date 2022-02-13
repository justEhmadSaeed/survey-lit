export const getInitialTheme = () => {
	if (typeof window !== 'undefined' && window.localStorage) {
		const storedPrefs = window.localStorage.getItem('dark-theme');
		return storedPrefs === 'true';
	} else return false;
};

export const toggleLocalTheme = (darkMode) => {
	if (typeof window !== 'undefined' && window.localStorage) {
		window.localStorage.setItem('dark-theme', darkMode);
	}
};
