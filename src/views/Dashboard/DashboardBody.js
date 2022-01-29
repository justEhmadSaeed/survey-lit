import React from 'react';
import DashboardFormsCollection from './DashboardFormsCollection';
import DashboardFunctions from './DashboardFunctions';

const DashboardBody = () => {
	return (
		<main className="flex h-screen flex-nowrap">
			{/* Left sidebar */}
			<section className="hidden lg:block text-center h-full w-64 border shrink-0">
				Workspace
			</section>
			{/* Main Section */}
			<section className="flex-1 bg-template-dashboard-bg">
				{/* Workspace Functions */}
				<DashboardFunctions />
				<DashboardFormsCollection />
			</section>
		</main>
	);
};

export default DashboardBody;
