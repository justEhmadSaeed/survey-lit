import React from 'react';
import { signoutWithGoogle } from 'services/firebase/firebase';

const Dashboard = () => {
	return (
		<div>
			<h1>Dashboard</h1>
			<button onClick={signoutWithGoogle}>Sign out</button>
		</div>
	);
};

export default Dashboard;
