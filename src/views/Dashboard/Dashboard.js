import React from 'react';
import { signoutWithGoogle } from 'services/firebase/firebase';
import DashboardNavbar from './Navbar.Dashboard';

const Dashboard = () => {
	return (
		<div>
			<DashboardNavbar />
			<button onClick={signoutWithGoogle}>Sign out</button>
		</div>
	);
};

export default Dashboard;
