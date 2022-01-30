import React from 'react';
import {
	DotsHorizontalIcon,
	RefreshIcon,
	UserAddIcon
} from '@heroicons/react/solid';
import { createNewForm } from 'utils/form-admin/form-admin';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toggleLoading } from 'store/slice/loading.slice';
import { useDispatch } from 'react-redux';

const DashboardFunctions = () => {
	const user = useSelector((state) => state.auth);
	const navigate = useNavigate();
	const dispatch = useDispatch();

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
					<RefreshIcon className="dashboard-icon" />
					<DotsHorizontalIcon className="dashboard-icon" />
				</div>
			</div>
			{/* Create Typeform Button */}
			<div className="my-2">
				<button
					onClick={async () => {
						dispatch(toggleLoading(true));
						await createNewForm(user.id, navigate);
						dispatch(toggleLoading(false));
					}}
					className="btn bg-template-black text-white"
				>
					+ Create typeform
				</button>
			</div>
		</div>
	);
};

export default DashboardFunctions;
