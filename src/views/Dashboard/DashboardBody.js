import React from 'react';
import { Link } from 'react-router-dom';
import SideNavConst from 'utils/constants/sideNav.constants';
import DashboardFormsCollection from './DashboardFormsCollection';
import DashboardFunctions from './DashboardFunctions';

const DashboardBody = () => {
	return (
		<main className="flex  h-screen flex-nowrap dark:bg-template-dark-green dark:text-white pt-16">
			{/* Left sidebar */}
			<section className="py-8 hidden lg:block text-left h-full w-64 border-r dark:border-template-signup-text shrink-0">
				{SideNavConst.map((n, id) => (
					<Link to={n.link} key={id}>
						<div
							className={`py-4 px-6 hover:bg-template-hover-color flex justify-start items-center ${
								n.active
									? 'border-l-4 border-template-maroon bg-template-maroon/10 text-template-maroon dark:text-white dark:bg-template-very-dark-green'
									: ''
							}`}
						>
							{n.icon}
							<span className="pl-2">{n.content}</span>
						</div>
					</Link>
				))}
			</section>
			{/* Main Section */}
			<section className="flex-1 bg-template-dashboard-bg dark:bg-template-dark-green dark:text-white">
				{/* Workspace Functions */}
				<DashboardFunctions />
				<DashboardFormsCollection />
			</section>
		</main>
	);
};

export default DashboardBody;
