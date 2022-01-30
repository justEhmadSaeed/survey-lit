import React from 'react';
import typeform_logo from 'assets/typeform_logo.svg';
import UserMenu from 'components/UserMenu';
import AdminNavbar from 'components/Navigation/AdminNavbar';

const DashboardNavbar = () => {
	return (
		<AdminNavbar>
			<header className="">
				<div className="p-2">
					<img
						className="h-4"
						src={typeform_logo}
						alt="Logo"
					/>
				</div>
			</header>
			<UserMenu />
		</AdminNavbar>
	);
};

export default DashboardNavbar;
