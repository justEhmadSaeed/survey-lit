import React from 'react';
import surveyit_logo from 'assets/logo.png';
import darkLogo from 'assets/logo-dark.png';
import UserMenu from 'components/UserMenu';
import AdminNavbar from 'components/AdminNavbar';

const DashboardNavbar = () => {
	return (
		<AdminNavbar>
			<header>
				<div className="p-2">
					<img
						className="h-8 dark:hidden"
						src={surveyit_logo}
						alt="Logo"
					/>
					<img
						className="h-8 dark:block hidden"
						src={darkLogo}
						alt="Logo"
					/>
				</div>
			</header>
			<footer>
				<UserMenu />
			</footer>
		</AdminNavbar>
	);
};

export default DashboardNavbar;
