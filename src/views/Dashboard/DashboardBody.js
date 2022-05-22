import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addForms } from 'store/slice/forms.slice';
import { getAllForms } from 'utils/form-data/form-data';
import DashboardFormsCollection from './DashboardFormsCollection';
import DashboardFunctions from './DashboardFunctions';

const DashboardBody = () => {
	const dispatch = useDispatch();
	const userId = useSelector((state) => state.auth.id);

	useEffect(() => {
		const getFormsData = async () => {
			const forms = await getAllForms(userId);
			dispatch(addForms(forms));
		};
		getFormsData();
	}, []);

	return (
		<main className="flex form-admin-remaining-height flex-nowrap dark:bg-template-dark-green dark:text-white">
			{/* Left sidebar */}
			<section className="py-8 pl-4 hidden lg:block text-left h-full w-64 border-r dark:border-template-signup-text shadow-xl shrink-0">
				Workspace
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
