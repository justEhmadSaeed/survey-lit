/* eslint-disable linebreak-style */
import ResponseCard from 'components/ResponseCard';
import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const Responses = ({ form }) => {
	const navigate = useNavigate();
	const { formId } = useParams();
	const formResp = [
		{
			respName: 'Zaeema Anwar',
			responses: [
				{ choice: '4', title: 'What is your Grade?' },
				{
					choice: 'Dr. Strange',
					title: 'Who is your favorite Marvel Character?'
				},
				{
					choice: 'Batman',
					title: 'Who is your favorite DC Character'
				},
				{ choice: 'huwke', title: 'My question title' }
			]
		},
		{
			respName: 'Zaeema Anwar',
			responses: [
				{ choice: 'huwke', title: 'My question title' },
				{ choice: 'huwke', title: 'My question title' },
				{ choice: 'huwke', title: 'My question title' },
				{ choice: 'huwke', title: 'My question title' },
				{ choice: 'huwke', title: 'My question title' },
				{ choice: 'huwke', title: 'My question title' },
				{ choice: 'huwke', title: 'My question title' }
			]
		},
		{
			respName: 'Zaeema Anwar',
			responses: [
				{ choice: 'huwke', title: 'My question title' },
				{ choice: 'huwke', title: 'My question title' },
				{ choice: 'huwke', title: 'My question title' },
				{ choice: 'huwke', title: 'My question title' },
				{ choice: 'huwke', title: 'My question title' },
				{ choice: 'huwke', title: 'My question title' },
				{ choice: 'huwke', title: 'My question title' }
			]
		},
		{
			respName: 'Zaeema Anwar',
			responses: [
				{ choice: 'huwke', title: 'My question title' },
				{ choice: 'huwke', title: 'My question title' },
				{ choice: 'huwke', title: 'My question title' },
				{ choice: 'huwke', title: 'My question title' },
				{ choice: 'huwke', title: 'My question title' },
				{ choice: 'huwke', title: 'My question title' },
				{ choice: 'huwke', title: 'My question title' }
			]
		}
	];
	return (
		<div className="px-56 py-28 bg-template-dashboard-bg">
			<h1 className="text-4xl font-extrabold">Responses</h1>
			<h3 className="py-2">
				to form{' '}
				<span className="font-bold text-lg">Form Title</span>
			</h3>
			{formResp.map((resp, id) => (
				<div key={id}>
					<ResponseCard response={resp} id={id} />
				</div>
			))}
		</div>
	);
};
export default Responses;
