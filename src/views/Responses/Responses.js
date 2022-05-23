/* eslint-disable linebreak-style */

import ResponseCard from 'components/ResponseCard';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import DashboardNavbar from 'views/Dashboard/DashboardNavbar';
import ResponseRespresentation from 'views/Responses/ResponseRepresentation';
import { REPRESENTATION } from 'utils/constants/chartConstants';
import {
	DocumentTextIcon,
	PresentationChartLineIcon
} from '@heroicons/react/solid';

const Responses = () => {
	const { formId } = useParams();
	const { name, responses } = useSelector(
		(state) =>
			state.forms.forms.filter((form) => form.id === formId)[0]
	);
	const formTitle = name;
	const [representationType, setRepresentationType] = useState(
		REPRESENTATION.TEXTUAL
	);
	const toggleRepresentation = () => {
		representationType === REPRESENTATION.TEXTUAL
			? setRepresentationType(REPRESENTATION.GRAPHICAL)
			: setRepresentationType(REPRESENTATION.TEXTUAL);
	};
	return (
		<div>
			<DashboardNavbar />
			<div className="px-4 lg:px-56 py-24 bg-template-dashboard-bg dark:text-template-auth-border dark:bg-template-dark-green min-h-screen">
				<div className="flex justify-between items-start">
					<div>
						<h1 className="text-4xl font-extrabold dark:text-white">
							Responses
						</h1>
						<h3 className="py-2">
							to form{' '}
							<span className="font-bold text-lg">
								{formTitle}
							</span>
						</h3>
					</div>
					<button
						onClick={toggleRepresentation}
						className="text-template-grey w-max p-2 bg-template-hover-color dark:bg-template-very-dark-green dark:text-template-light-grey dark:hover:bg-template-green rounded shadow hover:text-template-maroon"
					>
						{representationType ===
						REPRESENTATION.TEXTUAL ? (
							<div className="flex justify-end items-center">
								<PresentationChartLineIcon className="w-6 lg:mr-2" />
								{'  '}
								<p className="text-sm w-min px-2">
									Graphical Summary
								</p>
							</div>
						) : (
							<div className="flex justify-end items-center">
								<DocumentTextIcon className="w-6 lg:mr-2" />
								<p className="text-sm w-min px-2">
									Textual Summary
								</p>
							</div>
						)}
					</button>
				</div>
				{representationType === REPRESENTATION.TEXTUAL ? (
					responses.map((resp, id) => (
						<div key={id}>
							<ResponseCard response={resp} id={id} />
						</div>
					))
				) : (
					<ResponseRespresentation responses={responses} />
				)}
			</div>
		</div>
	);
};
export default Responses;
