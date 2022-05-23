import {
	BriefcaseIcon,
	HomeIcon,
	LogoutIcon,
	PlusIcon
} from '@heroicons/react/solid';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { signoutWithGoogle } from 'services/firebase/firebase';
import { toggleLoading } from 'store/slice/auth.slice';
import PATH from 'utils/constants/routing-paths.constant';
import { createNewForm } from 'utils/form-data/form-data';
import DashboardFormsCollection from './DashboardFormsCollection';
import DashboardFunctions from './DashboardFunctions';

const DashboardBody = () => {
	const userId = useSelector((state) => state.auth.id);
	const navigate = useNavigate();
	const dispatch = useDispatch();

	return (
		<main className="flex  h-screen flex-nowrap dark:bg-template-dark-green dark:text-white pt-16">
			{/* Left sidebar */}
			<section className="py-8 hidden lg:block text-left h-full w-64 border-r dark:border-template-signup-text shrink-0">
				<Link to={PATH.HOME}>
					<div className="py-4 px-6 hover:bg-template-hover-color dark:hover:bg-template-very-dark-green/50 flex justify-start items-center">
						<HomeIcon className="dashboard-icon" />
						<span className="pl-2">Home</span>
					</div>
				</Link>
				<Link to={PATH.DASHBOARD}>
					<div className="py-4 px-6 hover:bg-template-hover-color dark:hover:bg-template-very-dark-green/50 flex justify-start items-center border-l-4 border-template-maroon bg-template-maroon/10 text-template-maroon dark:text-white dark:bg-template-very-dark-green">
						<BriefcaseIcon className="dashboard-icon" />
						<span className="pl-2">Workspace</span>
					</div>
				</Link>
				<button
					className="w-full"
					onClick={async () => {
						dispatch(toggleLoading(true));
						await createNewForm(userId, navigate);
						dispatch(toggleLoading(false));
					}}
				>
					<div className="py-4 px-6 hover:bg-template-hover-color dark:hover:bg-template-very-dark-green/50 flex justify-start items-center">
						<PlusIcon className="dashboard-icon" />
						<span className="pl-2">
							Create a Lit Survey
						</span>
					</div>
				</button>
				<button
					className="w-full"
					onClick={signoutWithGoogle}
				>
					<div className="py-4 px-6 hover:bg-template-hover-color dark:hover:bg-template-very-dark-green/50 flex justify-start items-center">
						<LogoutIcon className="dashboard-icon" />
						<span className="pl-2">Logout</span>
					</div>
				</button>
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
