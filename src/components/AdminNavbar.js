import React from 'react';
import PropTypes from 'prop-types';

const AdminNavbar = ({ children }) => {
	return (
		<nav className="flex justify-between items-center p-2 border-b dark:border-template-signup-text  shadow  bg-white dark:bg-template-dark-green dark:text-white fixed top-0 w-screen z-50">
			{children}
		</nav>
	);
};
AdminNavbar.propTypes = {
	children: PropTypes.array
};

AdminNavbar.defaultProps = {
	children: undefined
};

export default AdminNavbar;
