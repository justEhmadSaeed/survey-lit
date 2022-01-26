import React from 'react';
import { signoutWithGoogle } from 'services/firebase/firebase';
import Navbar from './Navbar';

const Dashboard = () => {
	return (
		<div>
			<Navbar />
			<button onClick={signoutWithGoogle}>Sign out</button>
		</div>
	);
};

export default Dashboard;
