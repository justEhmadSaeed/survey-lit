import React from 'react';
import surveyit_logo from 'assets/logo.png';
import UserMenu from 'components/UserMenu';
import AdminNavbar from 'components/AdminNavbar';

const DashboardNavbar = () => {
	return (
		<AdminNavbar>
			<header className="">
				<div className="p-2">
					<img
						className="h-4"
						src={surveyit_logo}
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
