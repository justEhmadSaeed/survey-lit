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
		<main className="flex form-admin-remaining-height flex-nowrap">
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
