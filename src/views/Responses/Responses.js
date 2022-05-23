/* eslint-disable linebreak-style */
// import AdminNavbar from 'components/AdminNavbar';
import ResponseCard from 'components/ResponseCard';
import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import DashboardNavbar from 'views/Dashboard/DashboardNavbar';

const Responses = () => {
	const { formId } = useParams();
	const responses = useSelector((state) =>
		state.forms.forms.filter((form) => form.id === formId)[0].responses
	);
	console.log(responses);
	const formResp = [
		{
			respName: 'Zaeema Anwar',
			responses: [
				{
					choice: 'Definitiely Yes',
					title: 'Hey, are you a lit person?'
				},
				{
					choice: 'Often',
					title: 'Do you like to walk?'
				}
			]
		}
	];
	const formTitle = 'Personal Choices';
	return (
		<div>
			<DashboardNavbar />
			<div className="px-56 py-24 bg-template-dashboard-bg dark:text-template-auth-border dark:bg-template-dark-green min-h-screen">
				<h1 className="text-4xl font-extrabold dark:text-white">
					Responses
				</h1>
				<h3 className="py-2">
					to form{' '}
					<span className="font-bold text-lg">
						{formTitle}
					</span>
				</h3>
				{formResp.map((resp, id) => (
					<div key={id}>
						<ResponseCard response={resp} id={id} />
					</div>
				))}
			</div>
		</div>
	);
};
export default Responses;
