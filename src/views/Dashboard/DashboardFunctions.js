import React from 'react';
import {
	DotsHorizontalIcon,
	RefreshIcon,
	UserAddIcon
} from '@heroicons/react/solid';
import { createNewForm } from 'utils/form-data/form-data';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { toggleLoading } from 'store/slice/auth.slice';

const DashboardFunctions = () => {
	const userId = useSelector((state) => state.auth.id);
	const navigate = useNavigate();
	const dispatch = useDispatch();

	const reloadWindow = () => {
		window.location.reload();
	};
	return (
		<div className="mx-8 pb-2 border-b">
			{/* Workspace */}
			<div className="flex py-4 justify-start items-center">
				<h2 className="text-lg pr-9 border-r">
					My Workspace
				</h2>
				{/* Functions */}
				<div className="flex pl-9 items-center flex-nowrap gap-4">
					<UserAddIcon className="dashboard-icon" />
					<RefreshIcon
						className="dashboard-icon"
						onClick={reloadWindow}
					/>
					<DotsHorizontalIcon className="dashboard-icon" />
				</div>
			</div>
			{/* Create Lit Survey Button */}
			<div className="my-2">
				<button
					onClick={async () => {
						dispatch(toggleLoading(true));
						await createNewForm(userId, navigate);
						dispatch(toggleLoading(false));
					}}
					className="btn bg-template-maroon dark:bg-template-very-dark-green text-white"
				>
					+ Create Lit Survey
				</button>
			</div>
		</div>
	);
};

export default DashboardFunctions;
